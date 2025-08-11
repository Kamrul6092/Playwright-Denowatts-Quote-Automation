const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');
const { QuotePage } = require('../pages/quotePage');
const { SummaryPage } = require('../pages/summaryPage');

test('Fill Create Quote Form - Page 1 and Verify Summary', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const quotePage = new QuotePage(page);
  const summaryPage = new SummaryPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login();

  // Step 2: Navigate to Create Quote page
  await homePage.openSettings();
  await homePage.navigateToNewQuote();

  // Step 3: Fill form
  await quotePage.fillCreateQuoteForm(0.5, 'Alabama');

  // Step 4: Verify Summary table
  await summaryPage.assertHardwareCounts({ sensors: 10, gateways: 2 });
  await summaryPage.assertServiceLines({ years: 5 });
  await summaryPage.assertOptionalEquipmentDependencies({ cellularSelected: true });
});
