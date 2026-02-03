import { type Locator, type Page } from '@playwright/test';

export class HeaderPage {
  page: Page;
  addToCartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartIcon = page.locator('//span[@class="shopping_cart_badge"]');
  }

  async click_addToCartIcon(): Promise<void> {
    const addToCartIcon = this.addToCartIcon;
    await addToCartIcon.waitFor({ state: 'attached' });
    await addToCartIcon.waitFor({ state: 'visible' });
    await addToCartIcon.click();
  }

  async get_AddTocartIconBadge_elem(): Promise<Locator> {
    const addToCartIcon = this.addToCartIcon;
    await addToCartIcon.waitFor({ state: 'attached' });
    await addToCartIcon.waitFor({ state: 'visible' });
    return addToCartIcon;
  }
}
