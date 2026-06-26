import {Page, Locator} from '@playwright/test'
import { TshirtsPage } from './TshirtsPage';

export class MyAccountPage{
    page: Page;
    userAccountLocator: Locator;
    tshirtLinkLocator: Locator;


    constructor(page:Page){
        this.page=page;
        this.userAccountLocator=page.getByRole('link', { name: 'Jatin Shharma' })
        this.tshirtLinkLocator=page.getByRole('link', {name:'T-shirts'});
    }

    async verifyUserLoggedIn():Promise<boolean>{
        return await this.userAccountLocator.isVisible();
    }

    async clickOnTshirtsLink(): Promise<TshirtsPage>{
        await this.tshirtLinkLocator.click();
        const tshirtspage=new TshirtsPage(this.page);
        return tshirtspage;
    }
}