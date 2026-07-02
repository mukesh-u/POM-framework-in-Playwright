import { Page,Locator } from "@playwright/test";

export class OrderSummaryPage{

    readonly page:Page;
    readonly summaryTitleLocator:Locator;
    readonly shoppingCartEmptyTextLocator: Locator;
    readonly incrementQuantityIconLocator: Locator;
    readonly decrementQuanityIconLocator: Locator;
    readonly quantityIconLocator: Locator;
    readonly totalPriceIconLocator: Locator;

    constructor(page:Page){
        this.page=page;
        this.summaryTitleLocator=page.locator('#cart_title');
        this.shoppingCartEmptyTextLocator=page.getByText('Your shopping cart is empty.');
        this.incrementQuantityIconLocator=page.locator('.cart_quantity_up');
        this.decrementQuanityIconLocator=page.locator('.cart_quantity_down');
        this.quantityIconLocator=page.locator('.cart_quantity_input');
        this.totalPriceIconLocator=page.locator('#total_price');
    }

    async increaseQuantity(){
        await this.incrementQuantityIconLocator.click();
    }

    async decreaseQuantity(){
        await this.decrementQuanityIconLocator.click();
    }

    async getTotalQuantity(): Promise<number>{
        return Number(await this.quantityIconLocator.inputValue());
    }

    async getTotalPrice(): Promise<number>{
        const price=await this.totalPriceIconLocator.textContent();
        return Number(price?.replace('$', '').trim());
    }

}