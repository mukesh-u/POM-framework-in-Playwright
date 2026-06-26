import { Page, Locator } from "@playwright/test";
import { OrderSummaryPage } from "./OrderSummaryPage";

export class CartPage{
    page: Page;
    checkoutButtonLocator: Locator;


    constructor(page:Page){
        this.page=page;
        this.checkoutButtonLocator=page.getByRole('link', {name:'Proceed to checkout'});
    }

    async clickOnCheckout(): Promise<OrderSummaryPage>{
        await this.checkoutButtonLocator.click();
        const orderSummaryPage=new OrderSummaryPage(this.page);
        return orderSummaryPage;
    }
}