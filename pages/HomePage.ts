import { Page, Locator } from "@playwright/test";
import { LoginPage } from "./LoginPage";

export class HomePage{
    readonly page:Page;
    readonly signInLinkLocator:Locator;

    constructor(page:Page){
        this.page=page;
        this.signInLinkLocator=page.getByRole('link', {name:'Sign in' });
    }

    async goto(){
        await this.page.goto('/');
    }

    async gotoLoginPage():Promise<LoginPage>{
        await this.signInLinkLocator.click();
        const loginPage=new LoginPage(this.page);
        return loginPage;
    }
}