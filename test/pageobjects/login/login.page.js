import { $ } from "@wdio/globals";
import Page from "../page.js";
import { routes } from "../../../fixtures/routes.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  constructor() {
    super("h2+p");
  }

  get welcomeBackHeader() {
    return $("h2");
  }

  get loginMessage() {
    return $("h2+p");
  }

  get emailAddressLabel() {
    return $('label[for="email"]');
  }

  get passwordLabel() {
    return $('label[for="password"]');
  }

  get usernameInput() {
    return $("#email");
  }

  get passwordInput() {
    return $("#password");
  }

  get loginBtn() {
    return $('button[type="submit"]');
  }

  /**
   * Purpose of this method is to enter username in the input field
   * @param {string} username - username to be entered in the input field
   */
  async enterUsername(username) {
    await this.usernameInput.setValue(username);
  }

  /**
   * Purpose of this method is to enter password in the input field
   * @param {string} password - password to be entered in the input field 
   */
  async enterPassword(password) {
    await this.passwordInput.setValue(password);
  }

  /**
   * Purpose of this method is to click on login button
   */
  async clickLoginBtn() {
    await this.loginBtn.click();
  }

  /**
   * Purpose of this method is to login to the application
   */
  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginBtn();
  }

  /**
   * Purpose of this method is to open the login page
   */
  open() {
    return super.open(routes.Login);
  }
}

export default new LoginPage();
