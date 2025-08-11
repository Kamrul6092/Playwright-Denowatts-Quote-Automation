
const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage')

test('Login and verify dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login();
  await page.waitForTimeout(6000);

});
