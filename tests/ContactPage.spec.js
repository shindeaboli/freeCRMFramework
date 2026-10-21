
import { test, expect } from '../fixture/GlobalFixture.js';

test.beforeEach('preCondition', async ({ page }) => {
    await page.goto('/');
});

test('verify user is on contact page', async ({page,contactPage}) => {
    await contactPage.clickOnContactlink();

    
    await expect(page.url()).toContain("contacts");
});

test('create new contact', async ({ contactPage }) => {
    


    await contactPage.clickOnContactlink();
    await contactPage.clickOnCreateButton();

    await contactPage.enterFirstname('Aboli');
    await contactPage.enterLastname('yadav');
    await contactPage.enterEmail('aboli123@gmail.com');

    await contactPage.clickOnSaveButton();
});
