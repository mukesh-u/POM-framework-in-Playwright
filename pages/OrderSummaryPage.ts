import { Page,Locator } from "@playwright/test";

export class OrderSummaryPage{

    page:Page;
    summaryTitleLocator:Locator;
    shoppingCartEmptyTextLocator: Locator;

    constructor(page:Page){
        this.page=page;
        this.summaryTitleLocator=page.locator('#cart_title');
        this.shoppingCartEmptyTextLocator=page.getByText('Your shopping cart is empty.');
    }

}