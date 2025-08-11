const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.settingsIcon = page.locator("//*[name()='path' and contains(@d,'M12.22 2h-')]").locator('..');
    this.quotationManagementLink = page.locator("//span[normalize-space()='Quotation Management']");
    this.createQuoteButton = page.locator("//button[normalize-space()='Create Quote']");
  }

  async openSettings() {
    await expect(this.settingsIcon).toBeVisible({ timeout: 10000 });
    await this.settingsIcon.click();
  }

  async navigateToNewQuote() {
    await expect(this.quotationManagementLink).toBeVisible({ timeout: 10000 });
    await this.quotationManagementLink.click();

    await expect(this.createQuoteButton).toBeVisible({ timeout: 10000 });
    await this.createQuoteButton.click();
  }
}

module.exports = { HomePage };
