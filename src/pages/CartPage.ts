import { type Locator, type Page } from '@playwright/test';

export class CartPage {
  page: Page;
  private readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('//button[@data-test="checkout"]');
  }

  async click_checkout(): Promise<void> {
    const checkoutButton = this.checkoutButton;
    await checkoutButton.waitFor({ state: 'attached' });
    await checkoutButton.waitFor({ state: 'visible' });
    await checkoutButton.click();
  }
}
