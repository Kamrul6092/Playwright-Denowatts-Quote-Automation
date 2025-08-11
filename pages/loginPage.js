const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailField = page.locator("//input[@id='email']");
    this.passwordField = page.locator("//input[@id='password']");
    this.loginButton = page.locator("//button[normalize-space()='Login']");
  }

  async goto() {
    await this.page.goto('https://portal.denowatts.com/signin', {
      timeout: 60000,
      waitUntil: 'domcontentloaded'
    });
    await expect(this.emailField).toBeVisible({ timeout: 20000 });
  }

  async login() {
    await this.emailField.fill('denowat122islam@gmail.com');
    await this.passwordField.fill('Project77');

    await Promise.all([
      this.page.waitForLoadState('networkidle', { timeout: 30000 }),
      this.loginButton.click()
    ]);
  }
}

module.exports = { LoginPage };
