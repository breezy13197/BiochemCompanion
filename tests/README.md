# Browser compatibility tests

## What this is, in plain language

These tests open every page of the Biochem Companion in several different
browsers (including a simulated iPhone and iPad), click through every section,
press every button, move every slider, and drag every draggable item — the way a
student would. Whenever something breaks, the test tells you **which page, which
section and which control** had the problem.

Why this helps with your iOS problem: if the same test **passes** in the
`chromium-desktop` browser (the engine behind Edge and Chrome) but **fails** in
the `iphone` browser, you know the problem is specific to iPhones, and the
message tells you where to look.

> **Good to know:** every browser on an iPhone or iPad — Safari, Chrome, Edge,
> Firefox — is built on Apple's engine, called *WebKit*. That is why an activity
> can work in Edge on a PC and still fail on an iPhone. The `iphone`, `ipad` and
> `safari-desktop` test browsers use WebKit, so they are the ones to watch.

## One-time setup

You only need to do this once on your computer.

1. **Install Node.js** (a free tool that runs the tests): download the "LTS"
   version from <https://nodejs.org> and install it with the default options.
2. **Open a terminal in the project folder.** On Windows, open the folder in
   File Explorer, click the address bar, type `cmd` and press Enter. On a Mac,
   right-click the folder and choose *New Terminal at Folder*.
3. **Download the testing tools** (this reads `package.json`, which lists what
   is needed, and fetches it into a `node_modules` folder):
   ```
   npm install
   ```
4. **Download the test browsers** (Playwright keeps its own copies of
   Chromium, Firefox and WebKit, so your normal browsers are not affected):
   ```
   npx playwright install chromium firefox webkit
   ```

## Running the tests

| What you want | Command |
|---|---|
| Everything, in every browser (slowest, most complete) | `npm test` |
| Just the simulated iPhone | `npm run test:iphone` |
| Just desktop Safari (WebKit) | `npm run test:safari` |
| Just desktop Chrome/Edge engine (your "known good" comparison) | `npm run test:chrome` |
| One page only, in the iPhone | `npx playwright test --project=iphone -g "enzymes.html"` |
| One kind of check only (e.g. test 4, dragging) | `npx playwright test --project=iphone -g "4\. drag"` |
| Also try the real Microsoft Edge app (if installed) | `EDGE=1 npm test` (on Windows: `set EDGE=1 && npm test`) |

You do not need to start a web server yourself — the tests start a small one
automatically (`tests/static-server.js`) and shut it down when they finish.

A full run in one browser takes roughly 4–5 minutes, because test 3 really does
press hundreds of buttons.

## Reading the results

While running you will see a line per test, with a ✓ for pass and ✘ for fail.
When something fails, the message looks like this:

```
Error: aminoacids.html › "The alpha helix" › button "Start over": errors when tapped
```

That reads as: page `aminoacids.html`, section *The alpha helix*, the button
labelled *Start over*, and a JavaScript error happened when it was tapped.

After every run, `test-results/SUMMARY.txt` is written: a plain-text list of every
failure with its full message. **If you want someone to look at a run, send that file
(or the whole `test-results` folder) — screenshots alone don't say what went wrong.**

For a picture-based report, run `npm run report` after a test run. It opens a
web page listing every test, with a **screenshot of the page at the moment of
failure**.

### The tests, and what a failure tells you

| # | Test | A failure usually means |
|---|---|---|
| 1 | Page loads cleanly | A script stopped part-way through (often an unsupported feature) so the page is blank or half-built. **This is the most likely test to reveal the iOS problem.** |
| 2 | Every section renders | A diagram or image has no size or didn't load, a section is empty, or something is wider than a phone screen so the page scrolls sideways. |
| 3 | Controls respond | A button or slider throws an error, or can't be tapped (something is covering it). Controls that visibly do nothing are listed as *notes* in the report, not failures. |
| 4 | Drag and drop works | A draggable item doesn't move when dragged with touch-style events, or the drop area is missing. |
| 5 | Checkpoint answers give feedback | Picking an answer in a "Can you predict it?" question shows nothing. |
| 6 | Works when storage is blocked | The page breaks in iPhone Private Browsing (or with strict privacy settings), which blocks the place where progress is saved. |
| 7 | `?s=` links open the right section | Deep links to a specific section don't work. |
| 8 | Hub backup/restore | The browser lacks a feature the progress-backup file needs. |
| 9 | Browser feature report | Never fails. Prints which modern features each browser supports, so you can match a failure to a missing feature. |

## Tracking down the iOS problem — a suggested routine

1. Run `npm run test:chrome`. This should be (nearly) all green; it is your baseline.
2. Run `npm run test:iphone`.
3. Anything red in step 2 that was **not** red in step 1 is an iPhone-only problem.
   The message names the page and section.
4. Open `npm run report` to see the screenshot, and compare test 9's
   feature list between `chromium-desktop` and `iphone`: a feature listed
   `false` on the iPhone is a likely culprit.
5. Confirm on a real iPhone (see next section), because a simulation can't
   catch everything.

## Trying it on a real iPhone

The simulated iPhone is close but not identical to real iOS. To check on a real
phone:

1. On your computer, run `node tests/static-server.js`. It prints a web address
   like `http://localhost:4173`.
2. Find your computer's address on your Wi-Fi network (e.g. `192.168.1.20`).
   On Windows run `ipconfig`; on a Mac run `ipconfig getifaddr en0`.
3. Make sure the phone is on the **same Wi-Fi**, then in Safari on the phone
   visit `http://192.168.1.20:4173/enzymes.html` (use your own address and the
   page you want).
4. If you have a Mac, you can see the phone's error messages: on the iPhone go to
   *Settings › Safari › Advanced › Web Inspector* and turn it on, connect the
   phone by cable, then in Safari on the Mac choose *Develop › (your iPhone) ›
   the page*.

## Limits to be aware of

- **Dragging is simulated.** Real fingers behave slightly differently from the
  scripted touch events used here. If test 4 passes but dragging still fails on a
  real iPhone, the cause is likely something only a real touch triggers (for
  example, the page scrolling instead of dragging).
- **Playwright's WebKit is not literally iOS Safari.** It's the same engine and
  catches most differences, but a very new or very old iOS version can differ.
  The real-phone steps above are the final check.
- **New kinds of drag activity.** Test 4 needs to know where each activity's
  drop areas are. If you add a new activity type, add its drop-area CSS class to
  the `DROP_ZONES` line near the top of `tests/compat.spec.js`; otherwise test 4
  lists it as a *note* rather than testing it.

## What each file does

- `package.json` — lists the testing tool (Playwright) that `npm install` fetches.
- `playwright.config.js` — chooses which browsers/devices to test in.
- `tests/static-server.js` — a tiny web server so the pages load like on a real website.
- `tests/compat.spec.js` — the tests themselves.
- `tests/summary-reporter.js` — writes `test-results/SUMMARY.txt` after each run.
- `test-results/` and `playwright-report/` — created by each run (screenshots and
  the report). They are ignored by git and safe to delete.
