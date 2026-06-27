import { Locator, Page } from "@playwright/test";

export class SearchResultPage{

    page: Page;
    searchResultHeading: Locator;

    constructor(page:Page){
        this.page=page;
        this.searchResultHeading=page.getByRole('heading');
    }
}