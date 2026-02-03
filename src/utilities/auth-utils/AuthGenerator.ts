import { LoginPage } from '@pages/LoginPage';
import { Page } from '@playwright/test';
import { ActionUtils } from '@utilities/ActionUtils';
import { test as setup } from 'src/hooks/BaseTest';

export class AuthGenerator {
  private loginPage: LoginPage;
  private actionUtils: ActionUtils;
  private page: Page;
  private url: string;
  private username: string;
  private password: string;

  constructor(url: string, username: string, password: string, page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.actionUtils = new ActionUtils(page);
    this.url = url;
    this.username = username;
    this.password = password;
  }

  async getStorageState() {
    await setup.step('Authentication', async () => {
      await this.actionUtils.navigateTo(this.url);
      await this.loginPage.enter_username(this.username);
      await this.loginPage.enter_password(this.password);
      await this.loginPage.click_log_in();
      await this.actionUtils.navigateTo(this.url);
      await this.page.goto(this.url + '/inventory.html');
      await this.page.context().storageState({ path: 'auth.json' });
    });
  }
}
