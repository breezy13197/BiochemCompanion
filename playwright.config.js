// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const PORT = Number(process.env.PORT || 4173);

/* Each "project" below is one browser/device the tests run in.
   The three that matter most for the iOS problem are `iphone`, `ipad`
   and `safari-desktop`: every browser on an iPhone or iPad (Safari,
   Chrome, Edge, Firefox) is built on Apple's WebKit engine, and
   Playwright's "webkit" is the closest stand-in for it. */
const projects = [
  { name: 'chromium-desktop', use: { ...devices['Desktop Chrome'] } },   // same engine as Edge
  { name: 'firefox-desktop',  use: { ...devices['Desktop Firefox'] } },
  { name: 'safari-desktop',   use: { ...devices['Desktop Safari'] } },   // WebKit on a computer
  { name: 'iphone',           use: { ...devices['iPhone 13'] } },        // WebKit + touch + small screen
  { name: 'ipad',             use: { ...devices['iPad Pro 11'] } },
  { name: 'android',          use: { ...devices['Pixel 7'] } },
];

// Optional: test in the real Microsoft Edge app if it is installed (run with EDGE=1).
if (process.env.EDGE) {
  projects.unshift({ name: 'edge', use: { ...devices['Desktop Edge'], channel: 'msedge' } });
}

module.exports = defineConfig({
  testDir: './tests',
  timeout: 90_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  retries: 0,                       // a failure should be reproducible, not hidden by retries
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    screenshot: 'only-on-failure',
    trace: 'off',   // tracing slows these large pages a lot; turn on with --trace on when digging into one failure
  },
  webServer: {
    command: 'node tests/static-server.js',
    url: `http://localhost:${PORT}/index.html`,
    reuseExistingServer: true,
    env: { PORT: String(PORT) },
  },
  projects,
});
