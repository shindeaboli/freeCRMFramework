# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactPage.spec.js >> @e2e @regression @sanity create new contact
- Location: tests\ContactPage.spec.js:19:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://ui.freecrm.com/
Call log:
  - navigating to "https://ui.freecrm.com/", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from '../fixture/GlobalFixture.js';
  2  | 
  3  | 
  4  | test.beforeEach("preCondition",async({page})=>{
  5  | 
> 6  | await page.goto("/");
     |            ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://ui.freecrm.com/
  7  | 
  8  | });
  9  | 
  10 | 
  11 | test("@e2e @Regresion verify user is on contact page", async({page,contactPage})=>{
  12 | 
  13 |     await contactPage.clickOnContactlink();
  14 | 
  15 |     await expect(page.url()).toContain("contacts");
  16 | 
  17 | });
  18 | 
  19 | test("@e2e @regression @sanity create new contact" , async({page, contactPage})=>{
  20 | 
  21 |     await contactPage.clickOnContactlink();
  22 |     await contactPage.clickOnCreateButton();
  23 |     await contactPage.enterFirstname("Aboli");
  24 |     await contactPage.enterLastname("yadav");
  25 |     await contactPage.enterEmail("aboli123@gmail.com");
  26 |     await contactPage.clickOnSaveButton();
  27 | 
  28 | });
```