
// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: {
    timeout: 7_000,
  },
  fullyParallel: true,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {

    //viewport: { width: 1366, height: 900 },
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    //trace: 'retain-on-failure',
    trace: 'on-first-retry',
    //screenshot: 'only-on-failure',
    //video: 'retain-on-failure',
    headless: false, // Browser dekhte chaile
    permissions: ['geolocation'],
    ignoreHTTPSErrors: true,
    baseURL: 'https://portal.denowatts.com/signin'
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1536, height: 864 },
        screenshot: "on",
        video: "on",
        trace: "on"
      },
    },
  ],
});
