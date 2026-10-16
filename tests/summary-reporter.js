/* Writes test-results/SUMMARY.txt: one plain-text list of everything that failed,
   with the page / section / control named. Send this file (it travels inside the
   test-results folder) when you want someone to look at a run. */
const fs = require('fs');
const path = require('path');

const strip = (s) => String(s || '').replace(/\x1b\[[0-9;]*m/g, '');

class SummaryReporter {
  constructor() { this.lines = []; this.counts = { passed: 0, failed: 0, other: 0 }; this.notes = []; }
  onTestEnd(test, result) {
    const project = test.parent.project() ? test.parent.project().name : '';
    if (result.status === 'passed') this.counts.passed++;
    else if (result.status === 'failed' || result.status === 'timedOut') this.counts.failed++;
    else this.counts.other++;
    (result.annotations || test.annotations || []).forEach((a) => {
      if (a.type === 'notes' || a.type === 'note' || a.type === 'features' || a.type === 'browser features')
        this.notes.push(`[${project}] ${test.title}: ${a.type}: ${strip(a.description)}`);
    });
    if (result.status === 'passed' || result.status === 'skipped') return;
    this.lines.push(`FAILED [${project}] ${test.title}  (${result.status})`);
    // Every soft-assertion message is kept, not just the first.
    const errors = result.errors && result.errors.length ? result.errors : result.error ? [result.error] : [];
    errors.forEach((e) => {
      const msg = strip(e.message).split('\n').filter((l) => l.trim() && !/^\s+at /.test(l) && !/^\s*\d+ \|/.test(l) && !/^\s*>\s*\d+ \|/.test(l) && !/^\s*\|/.test(l));
      this.lines.push('   - ' + msg.slice(0, 14).join('\n     '));
    });
    this.lines.push('');
  }
  onEnd() {
    const dir = path.resolve('test-results');
    fs.mkdirSync(dir, { recursive: true });
    const head = `Passed: ${this.counts.passed}   Failed: ${this.counts.failed}   Other: ${this.counts.other}\n\n`;
    fs.writeFileSync(path.join(dir, 'SUMMARY.txt'), head + this.lines.join('\n') + (this.notes.length ? '\n\nNOTES\n' + this.notes.join('\n') : '') + '\n');
  }
}
module.exports = SummaryReporter;
