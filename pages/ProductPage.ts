import { Page, Locator } from "@playwright/test";
import { CartPage } from "./CartPage";

export class ProductPage{
    readonly page: Page;
    readonly addToCartButtonLocator: Locator;
    

    constructor(page: Page){
        this.page=page;
        this.addToCartButtonLocator=page.getByRole('button', {name: 'Add to cart'});
    }


    async clickOnAddToCartButton(): Promise<CartPage>{
        await this.addToCartButtonLocator.click();
        const cartPage=new CartPage(this.page);
        return cartPage;
    }

}