import {Page, Locator} from '@playwright/test'
import { TshirtsPage } from './TshirtsPage';
import { ProductPage } from './ProductPage';
import { SearchResultPage } from './SearchResultPage';

export class MyAccountPage{
    readonly page: Page;
    readonly userAccountLocator: Locator;
    readonly tshirtLinkLocator: Locator;
    readonly searchInputLocator: Locator;
    readonly searchButtonLocator: Locator;
    readonly searchResultHeading: Locator;


    constructor(page:Page){
        this.page=page;
        this.userAccountLocator=page.getByRole('link', { name: 'Jatin Shharma' })
        this.tshirtLinkLocator=page.getByRole('link', {name:'T-shirts'});
        this.searchInputLocator=page.locator('#search_query_top');
        this.searchButtonLocator=page.getByPlaceholder('Search');
        this.searchResultHeading=page.getByRole('heading');
    }

    async verifyUserLoggedIn():Promise<boolean>{
        return await this.userAccountLocator.isVisible();
    }

    async clickOnTshirtsLink(): Promise<TshirtsPage>{
        await this.tshirtLinkLocator.click();
        const tshirtspage=new TshirtsPage(this.page);
        return tshirtspage;
    }

    async searchForProduct(productname: string):Promise<SearchResultPage>{
        await this.searchInputLocator.click()
        await this.searchInputLocator.fill(productname);
        await this.searchButtonLocator.press('Enter');
        const searchResultPage=new SearchResultPage(this.page);
        return searchResultPage;
    }
}