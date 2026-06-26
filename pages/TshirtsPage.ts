import { Page,Locator } from "@playwright/test";
import { ProductPage } from "./ProductPage";

export class TshirtsPage{

    page: Page;
    firstProductLocator: Locator;

    constructor(page: Page){
        this.page=page;
        this.firstProductLocator=page.getByText('Faded Short Sleeves T-shirt').first();
    }

    async openFirstProduct(): Promise<ProductPage>{
        await this.firstProductLocator.click();
        const productPage=new ProductPage(this.page);
        return productPage;
    }
}