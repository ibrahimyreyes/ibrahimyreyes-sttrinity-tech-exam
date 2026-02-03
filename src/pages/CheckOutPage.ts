import { type Locator, type Page } from '@playwright/test';

export class CheckOutPage {
  page: Page;
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly postalCode: Locator;
  private readonly continueButton: Locator;
  private readonly finishButton: Locator;
  private readonly placeOrderConfirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('//input[@data-test="firstName"]');
    this.lastName = page.locator('//input[@data-test="lastName"]');
    this.postalCode = page.locator('//input[@data-test="postalCode"]');
    this.continueButton = page.locator('//input[@data-test="continue"]');
    this.finishButton = page.locator('//button[@data-test="finish"]');
    this.placeOrderConfirmationMessage = page.locator('//h2[@data-test="complete-header"]');
  }

  // checkout - step one page methods
  async fill_up_firstName(firstName: string): Promise<void> {
    await this.firstName.waitFor({ state: 'attached' });
    await this.firstName.waitFor({ state: 'visible' });
    await this.firstName.fill(firstName);
  }

  async fill_up_lastName(lastName: string): Promise<void> {
    await this.lastName.waitFor({ state: 'attached' });
    await this.lastName.waitFor({ state: 'visible' });
    await this.lastName.fill(lastName);
  }

  async fill_up_postalCode(postalCode: string): Promise<void> {
    await this.postalCode.waitFor({ state: 'attached' });
    await this.postalCode.waitFor({ state: 'visible' });
    await this.postalCode.fill(postalCode);
  }

  async click_continue(): Promise<void> {
    const continueButton = this.continueButton;
    await continueButton.waitFor({ state: 'attached' });
    await continueButton.waitFor({ state: 'visible' });
    await continueButton.click();
  }

  // checkout - overview page methods
  async click_finish(): Promise<void> {
    const finishButton = this.finishButton;
    await finishButton.waitFor({ state: 'attached' });
    await finishButton.waitFor({ state: 'visible' });
    await finishButton.click();
  }

  // checkout - complete page methods
  async get_placeOrderConfirmationMessage(): Promise<string> {
    const placeOrderConfirmationMessage = this.placeOrderConfirmationMessage;
    await placeOrderConfirmationMessage.waitFor({ state: 'attached' });
    await placeOrderConfirmationMessage.waitFor({ state: 'visible' });
    return await placeOrderConfirmationMessage.textContent() ?? '';
  }
}
