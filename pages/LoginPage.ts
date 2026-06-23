import { Page, Locator } from "@playwright/test";
import { MyAccountPage } from "./MyAccountPage";

 export class LoginPage {
    page: Page;
    emailInputLocator: Locator;
    passwordInputLocator: Locator;
    signInButtonLocator: Locator;

    constructor(page:Page){
        this.page=page
        this.emailInputLocator=page.locator('#email')
        this.passwordInputLocator=page.getByRole('textbox', {name: 'Password' })
        this.signInButtonLocator=page.getByRole('button', {name: 'Sign in' })
    }

    async doLoginWith(username:string, password:string): Promise<MyAccountPage>{
        await this.emailInputLocator.fill(username);
        await this.passwordInputLocator.fill(password);
        await this.signInButtonLocator.click();
        const myAccountPage=new MyAccountPage(this.page);
        return myAccountPage;
    }
}