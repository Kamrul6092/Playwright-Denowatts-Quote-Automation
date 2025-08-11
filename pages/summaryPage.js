const { expect } = require('@playwright/test');

class SummaryPage {
  constructor(page) {
    this.page = page;
    this.summaryTable = page.locator("//table[contains(@class,'summary')]");
    this.backButton = page.getByRole('button', { name: /Back|Previous/i });
  }

  async assertHardwareCounts({ sensors, gateways }) {
    await expect(this.summaryTable).toBeVisible({ timeout: 10000 });

    await expect(
      this.summaryTable.locator(
        `//tr[td[contains(normalize-space(.),'Deno Sensor')] and td[normalize-space(text())='${sensors}']]`
      )
    ).toBeVisible({ timeout: 7000 });

    await expect(
      this.summaryTable.locator(
        `//tr[td[contains(normalize-space(.),'Deno Gateway')] and td[normalize-space(text())='${gateways}']]`
      )
    ).toBeVisible({ timeout: 7000 });
  }

  async assertServiceLines({ years }) {
    await expect(this.summaryTable).toBeVisible({ timeout: 10000 });
    await expect(
      this.summaryTable.locator(`//tr[td[contains(normalize-space(.),'${years} Year')]]`)
    ).toBeVisible({ timeout: 7000 });
  }

  async assertOptionalEquipmentDependencies({ cellularSelected }) {
    await expect(this.summaryTable).toBeVisible({ timeout: 10000 });

    const vpnLocator = this.summaryTable.locator(
      `//tr[td[contains(normalize-space(.),'Remote Access VPN')]]`
    );

    if (cellularSelected) {
      await expect(vpnLocator).toBeVisible({ timeout: 7000 });
    } else {
      await expect(vpnLocator).toHaveCount(0);
    }
  }

  async goBackToConfig() {
    await expect(this.backButton).toBeVisible({ timeout: 5000 });
    await this.backButton.click();
  }
}

module.exports = { SummaryPage };
