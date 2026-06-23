import {Page, Locator} from '@playwright/test'

export class MyAccountPage{
    page: Page;
    userAccountLocator: Locator;


    constructor(page:Page){
        this.page=page;
        this.userAccountLocator=page.getByRole('link', { name: 'Jatin Shharma' })
    }

    async verifyUserLoggedIn():Promise<boolean>{
        return await this.userAccountLocator.isVisible();
    }
}