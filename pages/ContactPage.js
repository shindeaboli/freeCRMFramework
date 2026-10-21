
import BasePage from "./BasePage.js";

export default class ContactPage extends BasePage {
    constructor(page) {
        super(page);

        this.contactLink = page.getByRole('link', {
            name: 'Contacts'
        });

        this.createButton = page.getByRole('button', {
            name: 'Create'
        });

        this.firstName = page.getByRole('textbox', {
            name: 'First Name'
        });

        this.lastName = page.getByRole('textbox', {
            name: 'Last Name'
        });

        this.email = page.getByRole('textbox', {
            name: 'Email'
        });

        this.saveButton = page.getByRole('button', {
            name: 'Save'
        });
    }

    async clickOnContactlink() {
        await this.click(this.contactLink);
    }

    async clickOnCreateButton() {
        await this.click(this.createButton);
    }

    async enterFirstname(firstname) {
        await this.fill(this.firstName, firstname);
    }

    async enterLastname(lastname) {
        await this.fill(this.lastName, lastname);
    }

    async enterEmail(email) {
        await this.fill(this.email, email);
    }

    async clickOnSaveButton() {
        await this.click(this.saveButton);
    }
}
