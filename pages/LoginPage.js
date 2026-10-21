import BasePage from "./BasePage";

export default class LoginPage extends BasePage
{

    constructor(page)
    {
        super(page);

        this.username=page.getByRole('textbox',{name : 'Email'});
        this.password=page.getByRole('textbox',{name : 'Password'});
        this.login=page.getByRole('button',{name : 'Login'});
    }

    async enterUsername(username)
    {
        await this.username.fill(username);
       

    }

    async enterPassword(password)
    {
        await this.password.fill(password);
    }

    async clickOnLoginButton()
    {
        await this.login.click();
    }

}