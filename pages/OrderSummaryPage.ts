import { Page,Locator } from "@playwright/test";

export class OrderSummaryPage{

    page:Page;
    summaryTitleLocator:Locator;

    constructor(page:Page){
        this.page=page;
        this.summaryTitleLocator=page.locator('#cart_title');
    }

    // async verifySummaryTitle(){
    //     await this.summaryTitleLocator.isVisible()
    // }
}