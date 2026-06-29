import { Page, Locator } from "@playwright/test";
import { OrderSummaryPage } from "./OrderSummaryPage";

export class CartPage{
    readonly page: Page;
    readonly productSuccessfullyAddedMessageLocator: Locator;
    readonly checkoutButtonLocator: Locator;
    readonly crossIconLocator: Locator;
    readonly trashIconLocator: Locator;

    constructor(page:Page){
        this.page=page;
        this.productSuccessfullyAddedMessageLocator=page.getByText('Product successfully added to your shopping cart');
        this.checkoutButtonLocator=page.getByRole('link', {name:'Proceed to checkout'});
        this.crossIconLocator=page.getByTitle('Close window');
        this.trashIconLocator=page.locator('.cart_quantity_delete');
    }


    async clickOnCheckout(): Promise<OrderSummaryPage>{
        await this.checkoutButtonLocator.click();
        const orderSummaryPage=new OrderSummaryPage(this.page);
        return orderSummaryPage;
    }

   async removeFromCart(): Promise<OrderSummaryPage>{
        await this.checkoutButtonLocator.click();
        await this.trashIconLocator.click();
        const orderSummaryPage=new OrderSummaryPage(this.page);
        return orderSummaryPage;
    }
}