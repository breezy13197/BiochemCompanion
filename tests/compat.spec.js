// @ts-check
/* ============================================================
   BROWSER COMPATIBILITY TESTS
   Goal: find pages/activities that work in one browser (e.g. Edge)
   but break in another (e.g. iPhone Safari), and say exactly WHERE.

   The same tests run once per browser listed in playwright.config.js.
   Anything that fails in `iphone` but passes in `chromium-desktop`
   is an iOS/WebKit-specific problem.

   Every check is "soft": one problem does not stop the run, so a single
   pass lists every problem on every page. Each message names the page,
   the section and the control involved.
   ============================================================ */
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
/* What counts as a place you can drop something. The pages use a few different
   markings (shared board = data-zone, amino-acid builder = baa-slot, reorder lists = ord-item,
   haemoglobin = coord-slot, nucleotide/oxphos boards = dnd-slot / seq-slot).
   If a new activity type is added, add its drop-area selector here. */
const DROP_ZONES = '[data-zone], .baa-slot, .ord-item, .dnd-slot, .coord-slot, .seq-slot';
const PAGES = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html')).sort();

/* ---------- helpers ---------- */

// The pages scroll with an animation every time a section opens. That is nice for students but
// makes the tests slow (especially in the iPhone browser), so jump instantly while testing.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const original = window.scrollTo.bind(window);
    window.scrollTo = (a, b) => (typeof a === 'object' ? original({ ...a, behavior: 'instant' }) : original(a, b));
  });
});

/** Starts listening for anything that goes wrong on a page. */
function watchProblems(page) {
  const problems = [];
  page.on('pageerror', (e) => problems.push('JS error: ' + e.message));
  page.on('console', (m) => {
    if (m.type() === 'error') problems.push('Console error: ' + m.text());
  });
  page.on('requestfailed', (r) => problems.push('Request failed: ' + r.url() + ' (' + (r.failure() || {}).errorText + ')'));
  page.on('response', (r) => {
    if (r.status() >= 400) problems.push('HTTP ' + r.status() + ': ' + r.url());
  });
  return problems;
}

/** Is this one of the study pages (has the shared engine), or the hub? */
function isStudyPage(page) {
  return page.evaluate(() => typeof FLOW !== 'undefined' && Array.isArray(FLOW));
}

/** Sections in this page, as [{key, label}]. */
function sectionList(page) {
  return page.evaluate(() => FLOW.map((s) => ({ key: s.key, label: s.label || s.key })));
}

/** Some modules are locked until earlier ones are finished. For testing we
 *  unlock everything so we can reach every activity. */
async function unlockEverything(page) {
  await page.evaluate(() => {
    window.moduleLocked = () => false;
    if (typeof refreshLocks === 'function') refreshLocks();
  });
}

/** Open a section the same way the page does when you click it. */
async function openSection(page, index) {
  await page.evaluate((i) => goTo(i), index);
  await page.waitForFunction((i) => {
    const el = document.querySelector('.section.active');
    return el && el.dataset.key === FLOW[i].key;
  }, index);
}

async function loadStudyPage(page, file) {
  const problems = watchProblems(page);
  await page.goto('/' + file, { waitUntil: 'load' });
  await page.waitForLoadState('networkidle').catch(() => {});
  return problems;
}

/* ============================================================
   1. EVERY PAGE LOADS WITHOUT ERRORS
   The most basic check, and the one most likely to catch "the page
   is blank on iPhone": a script that stops part-way through on an
   unsupported feature leaves the page half-built.
   ============================================================ */
for (const file of PAGES) {
  test(`1. loads cleanly: ${file}`, async ({ page }, info) => {
    const problems = await loadStudyPage(page, file);

    expect.soft(problems, `Errors while loading ${file} in ${info.project.name}`).toEqual([]);
    await expect.soft(page.locator('body')).not.toBeEmpty();

    if (file !== 'index.html') {
      expect.soft(await isStudyPage(page), `${file}: the section list (FLOW) was never built — a script stopped early`).toBe(true);
      expect.soft(await page.locator('#nav button').count(), `${file}: the sidebar menu is empty`).toBeGreaterThan(0);
      expect.soft(await page.locator('.section.active').count(), `${file}: no section is showing`).toBe(1);
    }
  });
}

/* ============================================================
   2. EVERY SECTION OF EVERY PAGE DRAWS PROPERLY
   Visits each section, then checks it has visible content, that every
   diagram (SVG / canvas / image) has a real size and loaded, and that
   nothing makes the page scroll sideways on a phone.
   ============================================================ */
for (const file of PAGES.filter((f) => f !== 'index.html')) {
  test(`2. every section renders: ${file}`, async ({ page }, info) => {
    const problems = await loadStudyPage(page, file);
    await unlockEverything(page);
    const sections = await sectionList(page);
    expect.soft(sections.length, `${file}: no sections found`).toBeGreaterThan(0);

    for (let i = 0; i < sections.length; i++) {
      const { key, label } = sections[i];
      const where = `${file} › "${label}" (${key})`;
      const before = problems.length;
      await openSection(page, i);

      const report = await page.evaluate(() => {
        const sec = document.querySelector('.section.active');
        const box = sec.getBoundingClientRect();
        const bad = [];
        sec.querySelectorAll('svg').forEach((s, n) => {
          const r = s.getBoundingClientRect();
          // Skip SVGs inside hidden panels (display:none gives them no boxes at all).
          if (s.getClientRects().length === 0) return;
          if (r.width < 2 || r.height < 2) bad.push(`SVG #${n + 1} (${s.id || s.getAttribute('class') || 'no id'}) has no size (${r.width}x${r.height})`);
        });
        sec.querySelectorAll('canvas').forEach((c, n) => {
          if (c.getClientRects().length && (c.width === 0 || c.height === 0)) bad.push(`canvas #${n + 1} is empty`);
        });
        sec.querySelectorAll('img').forEach((im) => {
          if (im.getClientRects().length && (!im.complete || im.naturalWidth === 0)) bad.push(`image failed to load: ${im.getAttribute('src')}`);
        });
        // Anything wider than the screen makes iPhone pages scroll sideways.
        const vw = document.documentElement.clientWidth;
        const wide = [];
        sec.querySelectorAll('*').forEach((e) => {
          const r = e.getBoundingClientRect();
          if (r.width > 0 && r.right > vw + 2 && wide.length < 3) {
            // ignore things that scroll inside their own box on purpose
            let p = e.parentElement, scrolls = false;
            while (p && p !== sec) { const ox = getComputedStyle(p).overflowX; if (ox === 'auto' || ox === 'scroll' || ox === 'hidden') { scrolls = true; break; } p = p.parentElement; }
            if (!scrolls) wide.push((e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (e.className && typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/).join('.') : '')) + ` reaches x=${Math.round(r.right)} but screen is ${vw} wide`);
          }
        });
        return {
          visible: box.width > 0 && box.height > 20,
          textLength: sec.innerText.trim().length,
          bad,
          wide,
          pageOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        };
      });

      expect.soft(report.visible, `${where}: section is not visible`).toBe(true);
      expect.soft(report.textLength, `${where}: section has almost no text`).toBeGreaterThan(20);
      expect.soft(report.bad, `${where}: broken diagrams/images`).toEqual([]);
      expect.soft(report.wide, `${where}: content wider than the screen`).toEqual([]);
      expect.soft(report.pageOverflow, `${where}: page scrolls sideways by ${report.pageOverflow}px`).toBeLessThanOrEqual(2);
      expect.soft(problems.slice(before), `${where}: errors raised while opening`).toEqual([]);
    }
  });
}

/* ============================================================
   3. EVERY BUTTON AND SLIDER CAN BE USED
   Walks each section and uses every control inside the diagrams and
   activity cards — taps buttons, drags sliders to both ends — and
   reports any JavaScript error that results. Also reports controls
   that visibly do nothing at all (a hint that an event never fired,
   which is a typical iOS symptom).
   ============================================================ */
for (const file of PAGES.filter((f) => f !== 'index.html')) {
  test(`3. controls respond: ${file}`, async ({ page, hasTouch }, info) => {
    test.setTimeout(480_000); // visits every section and uses every control, so it takes a while
    const problems = await loadStudyPage(page, file);
    await unlockEverything(page);
    const sections = await sectionList(page);
    const quiet = []; // controls that changed nothing — reported as notes, not failures

    for (let i = 0; i < sections.length; i++) {
      const { key, label } = sections[i];
      await openSection(page, i);
      const scope = page.locator('.section.active');

      // --- sliders ---
      const sliders = scope.locator('input[type=range]:visible');
      for (let n = 0; n < (await sliders.count()); n++) {
        const where = `${file} › "${label}" › slider #${n + 1} (${(await sliders.nth(n).getAttribute('id')) || 'no id'})`;
        const before = problems.length;
        const snap = await scope.innerHTML();
        // Set the slider the way a finger/mouse would: change value, then fire input + change.
        await sliders.nth(n).evaluate((el) => {
          const input = /** @type {HTMLInputElement} */ (el);
          const lo = input.min || '0', hi = input.max || '100';
          [hi, lo, String((Number(lo) + Number(hi)) / 2)].forEach((v) => {
            input.value = v;
            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
          });
        });
        expect.soft(problems.slice(before), `${where}: errors when moved`).toEqual([]);
        if (snap === (await scope.innerHTML())) quiet.push(`${where}: moving it changed nothing on screen`);
      }

      // --- buttons ---
      // Buttons come and go as you use them (a correct answer disables its buttons, a
      // "Next" button leaves the section), so rather than counting them up front we
      // repeatedly pick the next untested, usable button, mark it, and use it.
      for (let guard = 0; guard < 30; guard++) {
        const text = await page.evaluate(() => {
          const sec = document.querySelector('.section.active');
          // A row of 4+ identical buttons (quiz answer options) all share one handler,
          // so testing the first two of each row is enough and keeps the run quick.
          const sameKind = (b) => [...b.parentElement.children].filter((c) => c.tagName === 'BUTTON' && c.className === b.className);
          const next = [...sec.querySelectorAll('.figure button, .card button')].find((b) =>
            !b.dataset.tested && !b.disabled && b.getClientRects().length > 0 && getComputedStyle(b).visibility !== 'hidden' &&
            !(sameKind(b).length >= 4 && sameKind(b).indexOf(b) >= 2) &&
            !b.closest('.pager, .lock-card') &&                       // page-to-page navigation
            !/reset all|erase|clear all progress|delete/i.test(b.innerText || ''));  // keep progress intact
          if (!next) return null;
          next.dataset.tested = '1';
          next.dataset.testTarget = '1';
          return (next.innerText || next.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 40);
        });
        if (text === null) break;
        const where = `${file} › "${label}" › button "${text || '(no text)'}"`;
        const before = problems.length;
        const btn = page.locator('[data-test-target="1"]');
        // Try up to 3 times. A tap can miss for a moment while the page is still shifting after the
        // previous tap; a real person just taps again. Only a button that stays untappable is a failure.
        let lastError = null;
        for (let attempt = 1; attempt <= 3; attempt++) {
          // Some activities redraw their buttons right after a tap, which replaces the button we picked.
          // The fresh copy gets picked up on the next pass, so a vanished button is not a failure.
          if ((await btn.count()) === 0) break;
          try {
            hasTouch ? await btn.tap({ timeout: 2500 }) : await btn.click({ timeout: 2500 });
            lastError = null;
            if (attempt > 1) info.annotations.push({ type: 'notes', description: `${where}: needed ${attempt} tries to tap (page was still moving)` });
            break;
          } catch (e) {
            lastError = e;
            await page.waitForTimeout(400);
          }
        }
        if (lastError) {
          const log = String(lastError.message).replace(/\x1b\[[0-9;]*m/g, '');
          const covered = /intercepts pointer events/.test(log);
          if (!covered && (await btn.count()) > 0 && !(await btn.isVisible().catch(() => false))) {
            // The button hid itself (e.g. a "Continue" button hides its box once used). Not a failure.
            info.annotations.push({ type: 'notes', description: `${where}: hid itself before it could be tapped again` });
            lastError = null;
          } else if (!covered && /not stable/.test(log) && (await btn.count()) > 0) {
            // Still shifting but not covered by anything: trigger its click handler directly so we still
            // learn whether the handler throws an error. A covered button is never excused this way.
            await btn.dispatchEvent('click').catch(() => {});
            info.annotations.push({ type: 'notes', description: `${where}: kept shifting, so its click handler was triggered directly` });
            lastError = null;
          }
        }
        if (lastError) {
          // Playwright's call log says what stopped the tap (e.g. "<div class=readout> intercepts pointer events").
          const lines = String(lastError.message).replace(/\x1b\[[0-9;]*m/g, '').split('\n').map((l) => l.replace(/^\s*-\s*/, '').trim()).filter(Boolean);
          const why = lines.find((l) => /intercepts pointer events|not visible|not stable|not enabled|outside of the viewport/.test(l)) || lines.slice(-3).join(' | ');
          expect.soft(null, `${where}: could not be ${hasTouch ? 'tapped' : 'clicked'} after 3 tries — ${why}`).toBeUndefined();
        }
        await page.evaluate(() => document.querySelectorAll('[data-test-target]').forEach((e) => e.removeAttribute('data-test-target'))).catch(() => {});
        expect.soft(problems.slice(before), `${where}: errors when ${hasTouch ? 'tapped' : 'clicked'}`).toEqual([]);
        // If a button took us to another section, come back so the loop stays on this one.
        const stillHere = await page.evaluate((k) => document.querySelector('.section.active').dataset.key === k, key);
        if (!stillHere) await openSection(page, i);
      }
    }

    if (quiet.length) info.annotations.push({ type: 'notes', description: quiet.join('\n') });
    expect.soft(problems, `${file}: errors seen during the whole run`).toEqual([]);
  });
}

/* ============================================================
   4. DRAG-AND-DROP ACTIVITIES
   Finds everything draggable (marked touch-action:none, the way these
   pages mark them), then drags each one onto a drop zone using TOUCH-
   style pointer events — the same events a finger produces on iOS.
   Reports any draggable that does not move or throws an error.
   ============================================================ */
for (const file of PAGES.filter((f) => f !== 'index.html')) {
  test(`4. drag and drop works: ${file}`, async ({ page }, info) => {
    // We are acting out a finger with scripted events, and the browser knows no real
    // finger is down, so it refuses "pointer capture" (a drag-tracking feature a real
    // touch does get). Make those calls harmless so only genuine problems surface.
    await page.addInitScript(() => {
      Element.prototype.setPointerCapture = function () {};
      Element.prototype.releasePointerCapture = function () {};
    });
    const problems = await loadStudyPage(page, file);
    await unlockEverything(page);
    const sections = await sectionList(page);
    let dragsTried = 0;

    for (let i = 0; i < sections.length; i++) {
      const { label } = sections[i];
      await openSection(page, i);

      const found = await page.evaluate((sel) => {
        const sec = document.querySelector('.section.active');
        const items = [...sec.querySelectorAll('*')].filter((e) => getComputedStyle(e).touchAction === 'none' && e.getClientRects().length > 0 && getComputedStyle(e).visibility !== 'hidden');
        const zones = [...sec.querySelectorAll(sel)].filter((z) => z.getClientRects().length > 0);
        items.forEach((e, n) => e.setAttribute('data-test-drag', String(n)));
        zones.forEach((e, n) => e.setAttribute('data-test-zone', String(n)));
        return { items: items.length, zones: zones.length };
      }, DROP_ZONES);
      if (!found.items) continue;
      const where = `${file} › "${label}"`;
      if (!found.zones) {
        info.annotations.push({ type: 'note', description: `${where}: ${found.items} draggable-styled item(s) but no drop area to drag onto (these are probably tap-to-place; test 3 taps them). If this activity SHOULD be draggable, add its drop-area selector to DROP_ZONES in compat.spec.js.` });
        continue;
      }

      const toTry = Math.min(found.items, 4);
      for (let n = 0; n < toTry; n++) {
        const before = problems.length;
        const result = await page.evaluate(async ({ n, zoneCount }) => {
          const item = document.querySelector(`[data-test-drag="${n}"]`);
          if (!item || item.getClientRects().length === 0) return { skipped: true };
          item.scrollIntoView({ block: 'center' });
          const startRect = item.getBoundingClientRect();
          const parentBefore = item.parentElement;
          // choose a drop zone that is not the item's current parent
          let zone = null;
          for (let z = 0; z < zoneCount; z++) {
            const cand = document.querySelector(`[data-test-zone="${z}"]`);
            if (cand && cand !== parentBefore && !item.contains(cand)) { zone = cand; break; }
          }
          if (!zone) return { skipped: true };
          zone.scrollIntoView({ block: 'center' });
          const s = item.getBoundingClientRect(), t = zone.getBoundingClientRect();
          const sx = s.left + s.width / 2, sy = s.top + s.height / 2;
          const tx = t.left + t.width / 2, ty = t.top + Math.min(t.height / 2, 40);
          const fire = (el, type, x, y) => el.dispatchEvent(new PointerEvent(type, {
            bubbles: true, cancelable: true, composed: true, pointerId: 7, pointerType: 'touch', isPrimary: true,
            clientX: x, clientY: y, buttons: type === 'pointerup' ? 0 : 1,
          }));
          const wait = (ms) => new Promise((r) => setTimeout(r, ms));
          fire(item, 'pointerdown', sx, sy);
          let sawGhost = false;
          for (let step = 1; step <= 8; step++) {
            await wait(16);
            fire(item, 'pointermove', sx + ((tx - sx) * step) / 8, sy + ((ty - sy) * step) / 8);
            if (document.querySelector('.dnd-ghost, .ghost, .dragging')) sawGhost = true;
          }
          fire(item, 'pointerup', tx, ty);
          await wait(120);
          return {
            sawGhost,
            moved: item.parentElement !== parentBefore || !document.contains(item) ||
              Math.abs(item.getBoundingClientRect().top - startRect.top) > 2 ||
              Math.abs(item.getBoundingClientRect().left - startRect.left) > 2,
          };
        }, { n, zoneCount: found.zones });

        if (result.skipped) continue;
        dragsTried++;
        expect.soft(problems.slice(before), `${where}: errors while dragging item #${n + 1}`).toEqual([]);
        expect.soft(result.moved || result.sawGhost, `${where}: dragging item #${n + 1} did nothing (no drag preview, item did not move)`).toBe(true);
      }
    }
    info.annotations.push({ type: 'drags tried', description: String(dragsTried) });
  });
}

/* ============================================================
   5. QUIZ AND "CAN YOU PREDICT IT?" BUTTONS
   Answers the first question card on each section that has one, to
   make sure feedback appears. These use the shared engine, so a
   failure here usually points at a shared-file problem.
   ============================================================ */
for (const file of PAGES.filter((f) => f !== 'index.html')) {
  test(`5. checkpoint answers give feedback: ${file}`, async ({ page, hasTouch }) => {
    const problems = await loadStudyPage(page, file);
    await unlockEverything(page);
    const sections = await sectionList(page);

    for (let i = 0; i < sections.length; i++) {
      await openSection(page, i);
      const opts = page.locator('.section.active [data-check] button.choice:visible');
      if (!(await opts.count())) continue;
      const where = `${file} › "${sections[i].label}"`;
      const before = problems.length;
      const html = await page.locator('.section.active').innerHTML();
      try {
        hasTouch ? await opts.first().tap({ timeout: 3000 }) : await opts.first().click({ timeout: 3000 });
      } catch (e) {
        expect.soft(null, `${where}: first answer option could not be selected — ${String(e.message).split('\n')[0]}`).toBeUndefined();
        continue;
      }
      expect.soft(problems.slice(before), `${where}: errors when answering`).toEqual([]);
      expect.soft(html !== (await page.locator('.section.active').innerHTML()), `${where}: choosing an answer changed nothing on screen`).toBe(true);
    }
  });
}

/* ============================================================
   6. PRIVATE BROWSING / BLOCKED STORAGE
   On iPhones, Safari's Private mode and some privacy settings block
   localStorage. The pages are meant to fall back to memory. This
   simulates that, and also a very small saved-data allowance.
   ============================================================ */
for (const file of PAGES) {
  test(`6. works when storage is blocked: ${file}`, async ({ page }, info) => {
    await page.addInitScript(() => {
      const boom = () => { throw new DOMException('The quota has been exceeded.', 'QuotaExceededError'); };
      Storage.prototype.setItem = boom;
      Storage.prototype.getItem = function () { return null; };
      Storage.prototype.removeItem = boom;
    });
    const problems = await loadStudyPage(page, file);
    expect.soft(problems, `${file}: errors when storage is blocked (${info.project.name})`).toEqual([]);
    await expect.soft(page.locator('body')).not.toBeEmpty();
    if (file !== 'index.html') {
      expect.soft(await page.locator('.section.active').count(), `${file}: nothing displayed when storage blocked`).toBe(1);
      // Navigating saves progress — that must not crash either.
      const n = (await sectionList(page)).length;
      if (n > 1) { await openSection(page, 1); }
      expect.soft(problems, `${file}: errors after navigating with storage blocked`).toEqual([]);
    }
  });
}

/* ============================================================
   7. DEEP LINKS
   A link like enzymes.html?s=m1s2 should open straight to that section.
   (iOS apps and in-app browsers sometimes mangle query strings.)
   ============================================================ */
for (const file of PAGES.filter((f) => f !== 'index.html')) {
  test(`7. ?s= links open the right section: ${file}`, async ({ page }) => {
    await page.goto('/' + file, { waitUntil: 'load' });
    const sections = await sectionList(page);
    const target = sections[Math.min(2, sections.length - 1)];
    const problems = watchProblems(page);
    await page.goto(`/${file}?s=${encodeURIComponent(target.key)}`, { waitUntil: 'load' });
    const active = await page.evaluate(() => (document.querySelector('.section.active') || {dataset: {}}).dataset.key);
    // A locked module legitimately shows its lock card but is still the active section.
    expect.soft(active, `${file}: ?s=${target.key} did not open that section`).toBe(target.key);
    expect.soft(problems, `${file}: errors opening a deep link`).toEqual([]);
  });
}

/* ============================================================
   8. HUB: SAVE / RESTORE PROGRESS FILE
   index.html lets students download a progress backup (a Blob + a
   temporary download link) and load one back (FileReader). iOS Safari
   treats downloads differently from desktop browsers, so make sure
   at least the in-page pieces exist and don't throw.
   ============================================================ */
test('8. hub: backup download and restore code paths exist', async ({ page }) => {
  const problems = watchProblems(page);
  await page.goto('/index.html', { waitUntil: 'load' });
  const apis = await page.evaluate(() => ({
    blob: typeof Blob === 'function',
    objectUrl: typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function',
    fileReader: typeof FileReader === 'function',
    downloadAttr: 'download' in document.createElement('a'),
  }));
  // Informational: shows what this browser supports. A `false` here is the clue to look at.
  test.info().annotations.push({ type: 'browser features', description: JSON.stringify(apis) });
  expect.soft(apis.blob && apis.objectUrl && apis.fileReader, 'this browser lacks Blob/URL/FileReader').toBe(true);
  expect.soft(problems).toEqual([]);
});

/* ============================================================
   9. BROWSER FINGERPRINT (informational)
   Prints which modern features each browser has, so a failure in one
   browser can be matched to a missing feature. Never fails.
   ============================================================ */
test('9. report browser features (informational)', async ({ page }, info) => {
  await page.goto('/index.html');
  const features = await page.evaluate(() => {
    const css = (p, v) => !!(window.CSS && CSS.supports && CSS.supports(p, v));
    return {
      userAgent: navigator.userAgent,
      viewport: innerWidth + 'x' + innerHeight,
      touchPoints: navigator.maxTouchPoints,
      pointerEvents: typeof PointerEvent === 'function',
      'css gap in flexbox': css('gap', '1px'),
      'css aspect-ratio': css('aspect-ratio', '1/1'),
      'css inset': css('inset', '0'),
      'css :has()': (() => { try { return CSS.supports('selector(:has(*))'); } catch (e) { return false; } })(),
      'css dvh units': css('height', '100dvh'),
      'css touch-action': css('touch-action', 'none'),
      'smooth scrolling': 'scrollBehavior' in document.documentElement.style,
      'optional chaining (?.)': (() => { try { return !!new Function('return ({}).a?.b === undefined')(); } catch (e) { return false; } })(),
      'localStorage usable': (() => { try { localStorage.setItem('__t', '1'); localStorage.removeItem('__t'); return true; } catch (e) { return false; } })(),
    };
  });
  info.annotations.push({ type: 'features', description: JSON.stringify(features, null, 2) });
  console.log(`[${info.project.name}]`, JSON.stringify(features));
});
