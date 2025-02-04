import loginPage from "../pageobjects/login/login.page";
import testData from '../../fixtures/testData.json' assert {type:"json"};
import homePage from "../pageobjects/home.page";
import navbar from "../pageobjects/components/navbar";

describe('Verify user is able to filter product by brand', function ()  {
    xit('While searching for product from shop page user should be able to refine the listing by brand', async function (){
        await loginPage.open();
        await loginPage.waitForIsShown();
        await loginPage.login(testData.username, testData.password);
        await browser.pause(5000);
    });

    xit('Navigating all links', async function (){
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
});