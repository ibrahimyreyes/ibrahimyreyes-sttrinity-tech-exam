import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async click_add_to_cart(product: string): Promise<void> {
    const addToCartButton = this.page.locator(`//div[@data-test="inventory-item-name"][contains(text(),"${product}")]/ancestor::div[@data-test="inventory-item-description"]//button[contains(text(), "Add to cart")]`);
    await addToCartButton.waitFor({ state: 'attached' });
    await addToCartButton.waitFor({ state: 'visible' });
    await addToCartButton.click();
  }
}
