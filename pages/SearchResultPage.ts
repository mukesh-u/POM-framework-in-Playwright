import { Locator, Page } from "@playwright/test";
import { ProductPage } from "./ProductPage";

export class SearchResultPage{

    readonly page: Page;
   
    constructor(page:Page){
        this.page=page;
    }

    async openFirstProduct(productName: string): Promise<ProductPage> {
        await this.page.locator('.product-name').filter({ hasText: productName }).first().click();
        const productPage=new ProductPage(this.page);
        return productPage;
    }

}