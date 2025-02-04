import loginPage from "../pageobjects/login/login.page";
import testData from '../../fixtures/testData.json' assert {type:"json"};
import homePage from "../pageobjects/home.page";
import navbar from "../pageobjects/components/navbar";
import { LoginScreenText } from "../pageobjects/login/constants";
import { generateRandomCredentials } from "../utils/helpers";

describe('Verify user is able to filter product by brand', function ()  {
    const {email, password} = generateRandomCredentials();
    it('While searching for product from shop page user should be able to refine the listing by brand', async function (){
        await loginPage.open();
        await loginPage.waitForIsShown();
        await loginPage.login(testData.username, testData.password);
        await browser.pause(5000);
    });

    it('Navigating all links', async function (){
        await homePage.open();
        await navbar.clickShopOption();
        await browser.pause(5000);
        await navbar.clickHomeOption();
        await browser.pause(5000);
        await navbar.clickComponentsOption();
        await browser.pause(5000);
        await navbar.clickAboutOption();
        await browser.pause(5000);
        await navbar.clickJournalOption();
        await browser.pause(5000);
        await navbar.clickContactOption();
        await browser.pause(5000);
        await navbar.clickApiOption();
        await browser.pause(5000);
        await navbar.clickHomeLink();
        await browser.pause(5000);
    })

    it('Tap login button', async function (){
        await homePage.open();
        await homePage.waitForIsShown();
        await expect(browser).toHaveUrl(browser.options.baseUrl);
        await navbar.waitForIsShown();
        await expect(await navbar.profileIcon).toBeDisplayed();
        await navbar.clickOnProfileIcon();
        await expect(await navbar.signInButton).toBeDisplayed();
        await navbar.clickSignInButton();
        await loginPage.waitForIsShown();
        await browser.pause(5000);
        await loginPage.login(testData.username, testData.password);
        await browser.pause(5000);
    })

    fit('Perform signup', async function (){
        await homePage.open();
        await navbar.waitForIsShown();
        await navbar.clickOnProfileIcon();
        await expect(await navbar.signUpButton).toBeDisplayed();
        await navbar.clickSignUpButton();
        await loginPage.waitForIsShown();
        await expect(loginPage.createAccountHeader).toHaveText(LoginScreenText.CreateAccountText);
        await expect(loginPage.createAccountMessage).toHaveText(LoginScreenText.CreateAccountMessage);
        await loginPage.enterFullName('SampleFullName');
        await loginPage.enterUsername(email);
        await loginPage.enterPassword(password);
        await loginPage.clickSignUpBtn();
        await browser.pause(2000);
        await expect(loginPage.genderLabel).toBeDisplayed();
        await (loginPage.maleRadioBtn).click();
        await expect(loginPage.countryInput).toBeDisplayed();
        await loginPage.enterCountry('India');
        await loginPage.clickNextBtn();
        await expect(loginPage.acceptTermsCheckbox).toBeDisplayed();
        await loginPage.checkTermsAndConditions();
        const finalSignup = $('//button[text()="Sign Up"]');
        await expect(finalSignup).toBeDisplayed();
        await browser.pause(2000);
        await finalSignup.click();
        await expect(loginPage.verifyYourAccountMessage).toBeDisplayed();
        await browser.pause(2000);
    });
});