# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactPage.spec.js >> verify user is on contact page
- Location: tests\ContactPage.spec.js:8:5

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation "Main navigation" [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - img "FreeCRM" [ref=e7]
        - generic [ref=e8]: FreeCRM
      - button "Collapse navigation" [ref=e9] [cursor=pointer]
    - list [ref=e13]:
      - listitem [ref=e14]:
        - link "Home" [ref=e15] [cursor=pointer]:
          - /url: /
      - listitem [ref=e21]:
        - link "Contacts" [active] [ref=e22] [cursor=pointer]:
          - /url: /contacts
      - listitem [ref=e30]:
        - link "Companies" [ref=e31] [cursor=pointer]:
          - /url: /companies
      - listitem [ref=e38]:
        - link "Calendar" [ref=e39] [cursor=pointer]:
          - /url: /calendar
      - listitem [ref=e44]:
        - link "Deals" [ref=e45] [cursor=pointer]:
          - /url: /deals
      - listitem [ref=e51]:
        - link "Tasks" [ref=e52] [cursor=pointer]:
          - /url: /tasks
      - listitem [ref=e58]:
        - link "Cases" [ref=e59] [cursor=pointer]:
          - /url: /cases
      - listitem [ref=e65]:
        - link "Calls" [ref=e66] [cursor=pointer]:
          - /url: /calls
      - listitem [ref=e71]:
        - link "Email" [ref=e72] [cursor=pointer]:
          - /url: /email
      - listitem [ref=e78]:
        - link "Documents" [ref=e79] [cursor=pointer]:
          - /url: /documents
      - listitem [ref=e84]:
        - link "Campaigns" [ref=e85] [cursor=pointer]:
          - /url: /campaigns
      - listitem [ref=e91]:
        - link "Forms" [ref=e92] [cursor=pointer]:
          - /url: /forms
      - listitem [ref=e98]:
        - link "Landing pages" [ref=e99] [cursor=pointer]:
          - /url: /landing
      - listitem [ref=e105]:
        - link "Reports" [ref=e106] [cursor=pointer]:
          - /url: /reports
      - listitem [ref=e110]:
        - link "Products" [ref=e111] [cursor=pointer]:
          - /url: /products
      - listitem [ref=e118]:
        - link "Quotes" [ref=e119] [cursor=pointer]:
          - /url: /quotes
      - listitem [ref=e125]:
        - link "Invoices" [ref=e126] [cursor=pointer]:
          - /url: /invoices
    - link "Settings" [ref=e133] [cursor=pointer]:
      - /url: /settings
  - generic [ref=e139]:
    - banner [ref=e140]:
      - generic "Soft Tech enterprises" [ref=e141]:
        - strong [ref=e142]: Soft Tech enterprises
      - generic [ref=e143]:
        - 'button "Balance: $0.00" [ref=e144] [cursor=pointer]':
          - generic [ref=e145]: "Balance:"
          - generic [ref=e146]: $0.00
        - link "Free account" [ref=e147] [cursor=pointer]:
          - /url: /settings/billing/plan
        - search [ref=e151]:
          - searchbox "Search" [ref=e152]
        - button "Pinned Records" [ref=e154] [cursor=pointer]
        - button "Last accessed" [ref=e158] [cursor=pointer]
        - button "Rubbish Bin" [ref=e163] [cursor=pointer]
        - button "Contact support" [ref=e167] [cursor=pointer]
        - button "User menu" [ref=e171] [cursor=pointer]:
          - generic [ref=e172]: PP
    - generic [ref=e175]:
      - generic [ref=e176]:
        - heading "Contacts" [level=2] [ref=e178]
        - generic [ref=e179]:
          - button [ref=e180] [cursor=pointer]
          - button "Refresh" [ref=e183] [cursor=pointer]
          - generic [ref=e189]:
            - button [ref=e190] [cursor=pointer]
            - button "Export options" [ref=e195] [cursor=pointer]
          - generic [ref=e198]:
            - button "List view" [ref=e199] [cursor=pointer]
            - button "Board view" [ref=e201] [cursor=pointer]
          - button [ref=e203] [cursor=pointer]
      - generic [ref=e207]:
        - table [ref=e208]:
          - rowgroup [ref=e209]:
            - row [ref=e210]:
              - columnheader [ref=e211]:
                - checkbox "Select All" [ref=e212] [cursor=pointer]
              - columnheader "Name" [ref=e213]
              - columnheader "Address" [ref=e219]
              - columnheader "Category" [ref=e222]
              - columnheader "Status" [ref=e228]
              - columnheader "Phone" [ref=e234]
              - columnheader "Email" [ref=e237]
              - columnheader [ref=e240]
          - rowgroup [ref=e241]:
            - row [ref=e242]:
              - cell [ref=e243]
              - cell [ref=e244]
              - cell [ref=e246]
              - cell [ref=e248]
              - cell [ref=e250]
              - cell [ref=e252]
              - cell [ref=e254]
              - cell [ref=e256]
            - row [ref=e257]:
              - cell [ref=e258]
              - cell [ref=e259]
              - cell [ref=e261]
              - cell [ref=e263]
              - cell [ref=e265]
              - cell [ref=e267]
              - cell [ref=e269]
              - cell [ref=e271]
            - row [ref=e272]:
              - cell [ref=e273]
              - cell [ref=e274]
              - cell [ref=e276]
              - cell [ref=e278]
              - cell [ref=e280]
              - cell [ref=e282]
              - cell [ref=e284]
              - cell [ref=e286]
            - row [ref=e287]:
              - cell [ref=e288]
              - cell [ref=e289]
              - cell [ref=e291]
              - cell [ref=e293]
              - cell [ref=e295]
              - cell [ref=e297]
              - cell [ref=e299]
              - cell [ref=e301]
            - row [ref=e302]:
              - cell [ref=e303]
              - cell [ref=e304]
              - cell [ref=e306]
              - cell [ref=e308]
              - cell [ref=e310]
              - cell [ref=e312]
              - cell [ref=e314]
              - cell [ref=e316]
            - row [ref=e317]:
              - cell [ref=e318]
              - cell [ref=e319]
              - cell [ref=e321]
              - cell [ref=e323]
              - cell [ref=e325]
              - cell [ref=e327]
              - cell [ref=e329]
              - cell [ref=e331]
            - row [ref=e332]:
              - cell [ref=e333]
              - cell [ref=e334]
              - cell [ref=e336]
              - cell [ref=e338]
              - cell [ref=e340]
              - cell [ref=e342]
              - cell [ref=e344]
              - cell [ref=e346]
            - row [ref=e347]:
              - cell [ref=e348]
              - cell [ref=e349]
              - cell [ref=e351]
              - cell [ref=e353]
              - cell [ref=e355]
              - cell [ref=e357]
              - cell [ref=e359]
              - cell [ref=e361]
        - status "Loading…" [ref=e363]
      - generic [ref=e365]:
        - generic [ref=e366]: No records found
        - generic [ref=e367]:
          - button "Previous" [disabled] [ref=e368]
          - button "1" [ref=e371] [cursor=pointer]
          - button "Next" [disabled] [ref=e372]
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '../fixture/GlobalFixture.js';
  3  | 
  4  | test.beforeEach('preCondition', async ({ page }) => {
  5  |     await page.goto('/');
  6  | });
  7  | 
  8  | test('verify user is on contact page', async ({contactPage}) => {
  9  |     await contactPage.clickOnContactlink();
  10 | 
> 11 |     await expect(page).toHaveURL(/contacts/);
     |                  ^ ReferenceError: page is not defined
  12 |     //await expect(contactPage).toHaveURL("contacts");
  13 | });
  14 | 
  15 | test('create new contact', async ({ contactPage }) => {
  16 |     
  17 | 
  18 | 
  19 |     await contactPage.clickOnContactlink();
  20 |     await contactPage.clickOnCreateButton();
  21 | 
  22 |     await contactPage.enterFirstname('Aboli');
  23 |     await contactPage.enterLastname('yadav');
  24 |     await contactPage.enterEmail('aboli123@gmail.com');
  25 | 
  26 |     await contactPage.clickOnSaveButton();
  27 | });
  28 | 
```