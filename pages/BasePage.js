
export default class BasePage {
    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        await locator.click();
    }

    async doubleClick(locator) {
        await locator.dblclick();
    }

    async rightClick(locator) {
        await locator.click({ button: 'right' });
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async clear(locator) {
        await locator.clear();
    }

    async title() {
        return await this.page.title();
    }

    async url() {
        return this.page.url();
    }

    async textContent(locator) {
        return await locator.textContent();
    }
}
