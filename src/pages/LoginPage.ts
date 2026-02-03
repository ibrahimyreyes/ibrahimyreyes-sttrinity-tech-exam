import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  page: Page;
  private readonly usernameTextBox: Locator;
  private readonly passwordTextBox: Locator;
  private readonly logInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameTextBox = page.locator('//input[@data-test="username"]');
    this.passwordTextBox = page.locator('//input[@data-test="password"]');
    this.logInButton = page.locator('//input[@data-test="login-button"]');
  }

  async enter_username(username: string): Promise<void> {
    const usernameTextBox = this.usernameTextBox;
    await usernameTextBox.waitFor({ state: 'attached' });
    await usernameTextBox.waitFor({ state: 'visible' });
    await usernameTextBox.fill(username);
  }

  async enter_password(password: string): Promise<void> {
    const passwordTextBox = this.passwordTextBox;
    await passwordTextBox.waitFor({ state: 'attached' });
    await passwordTextBox.waitFor({ state: 'visible' });
    await passwordTextBox.fill(password);
  }

  async click_log_in(): Promise<void> {
    const logInButton = this.logInButton;
    await logInButton.waitFor({ state: 'attached' });
    await logInButton.waitFor({ state: 'visible' });
    await logInButton.click();
  }
}
