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

  get createAccountHeader() {
    return $("h2");
  }

  get createAccountMessage() {
    return $("h2+p");
  } 

  get welcomeBackHeader() {
    return $("h2");
  }

  get loginMessage() {
    return $("h2+p");
  }

  get fullNameLabel() {
    return $('label[for="fullName"]');
  }

  get fullNameInput() {
    return $("#fullName");
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

  get signUpBtn() {
    return $('button[type="button"]');
  }

  get genderLabel() {
    return $('//label[text()="Gender"]')
  }

  get maleRadioBtn() {
    return $('input[value="Male"]')
  }

  get maleLabel() {
    return $('input[value="Male"]+span')
  }

  get femaleRadioBtn() {
    return $('input[value="Female"]')
  }

  get femaleLabel() {
    return $('input[value="Female"]+span')
  }

  get otherRadioBtn() {
    return $('input[value="Other"]')
  }

  get otherLabel() {
    return $('input[value="Other"]+span')
  }

  get countryLabel() {
    return $('label[for="country"]')
  }

  get countryInput() {
    return $('#country')
  }

  get bioLabel() {
    return $('label[for="bio"]')
  }

  get bioInput() {
    return $("#bio")
  }

  get previousBtn(){
    return $('//button[text()="Previous"]')
  }

  get nextBtn(){
    return $('//button[text()="Next"]')
  }

  get acceptTermsCheckbox(){
    return $('input[name="agreeToTerms"]')
  }

  get verifyYourAccountMessage(){
    return $('//h2[text()="Verify Your Account"]')
  }

  /**
   * Purpose of this method is to enter full name in the input field
   * @param {string} fullName - full name to be entered in the input field
   */
  async enterFullName(fullName) {
    await this.fullNameInput.setValue(fullName);
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
   * Purpose of this method is to click on sign up button
   */
  async clickSignUpBtn() {
    await this.signUpBtn.click();
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
   * Purpose of this method is to click on previous button
   */
  async clickPreviousBtn(){
    await this.previousBtn.click();
  }

  /**
   * Purpose of this method is to click on next button
   */
  async clickNextBtn(){
    await this.nextBtn.click();
  }

  /**
   * Purpose of this method is to enter country in the input field
   * @param {string} country 
   */
  async enterCountry(country){
    await this.countryInput.setValue(country);
  }

  async checkTermsAndConditions(){
    await this.acceptTermsCheckbox.click();
  }

  /**
   * Purpose of this method is to open the login page
   */
  open() {
    return super.open(routes.Login);
  }
}

export default new LoginPage();
