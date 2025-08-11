// quotePage.js

const { expect } = require('@playwright/test');

class QuotePage {
  constructor(page) {
    this.page = page;

    // Text fields
    this.siteName = page.locator("//input[@id='siteName']");
    this.projectOwner = page.locator("//input[@id='projectOwner']");
    this.siteAddress = page.locator("//input[@id='siteAddress']");
    this.siteCity = page.locator("//input[@id='siteCity']");

    // Dropdowns
    this.isExistingSite = page.getByRole('combobox', { name: '* Is this project new to Denowatts?' });
    this.isNewProjectYes = page
      .locator("//div[@class='ant-select-item-option-content' and text()='Yes, this is a new project to Denowatts']")
      .first();

    // Updated State dropdown
    this.stateDropdown = page.locator("//span[@class='ant-select-selection-item']").first();
    this.firstStateOption = page.locator("//div[contains(@class,'ant-select-item-option-content')]").first();

    // Zip & date
    this.siteZipCode = page.locator("//input[@id='siteZipCode']");
    this.datePicker = page.locator("//div[@class='ant-picker-input']").first();


    // AC Nameplate & Mounting
    this.acNameplateField = page.locator("//input[@id='siteAcNameplate']");
    this.mountCarport = page.locator("//input[@value='Carport']");
    this.mountGroundFixed = page.locator("//input[@value='GroundFixed']");

    // Module Technology
    this.moduleBifacial = page.locator("//input[@value='Bifacial']");
    this.moduleMonofacial = page.locator("//input[@value='Monofacial']");

    // New Construction
    this.newConstruction = page.locator("//input[@value='New']");

    // Next button
    this.nextButton = page.locator("//span[normalize-space()='Next']");
  }

  async fillCreateQuoteForm(acValue) {
    // Wait for form to be ready
    await expect(this.siteName).toBeVisible({ timeout: 10000 });

    // Project Name
    await this.siteName.fill("test");

    // Project Owner
    await this.projectOwner.fill("test");

    //  Project Address
    await this.siteAddress.fill("test");

    //  Town
    await this.siteCity.fill("test");

    //  Is this project new to Denowatts?
    await expect(this.isExistingSite).toBeVisible({ timeout: 10000 });
    await this.isExistingSite.click();
    await expect(this.isNewProjectYes).toBeVisible({ timeout: 10000 });
    await this.isNewProjectYes.click();

    // State - select first available option
    await expect(this.stateDropdown).toBeVisible({ timeout: 10000 });
    await this.stateDropdown.click();
    await expect(this.firstStateOption).toBeVisible({ timeout: 10000 });
    await this.firstStateOption.click();

    //  Zip Code
    await this.siteZipCode.fill("12345");

    //  Project energization year
    await expect(this.datePicker).toBeVisible({ timeout: 10000 });
    await this.datePicker.click();
    await this.page.keyboard.type("2025");
    await this.page.keyboard.press("Enter");

    //  AC Nameplate
    await this.acNameplateField.fill(acValue.toString());

    // Mounting type
    await this.mountCarport.check();
    await this.mountGroundFixed.check();

    //  Module Technology
    await this.moduleBifacial.check();
    await this.moduleMonofacial.check();

    //  New construction
    await this.newConstruction.check();

    //  Next
    await expect(this.nextButton).toBeVisible({ timeout: 10000 });
    await this.nextButton.click();
  }
}

module.exports = { QuotePage };
