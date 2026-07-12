import {test, expect} from '../../fixtures/testFixture'
import { getUserData } from '../../data/user'
import { HomePage } from '../../pages/HomePage';
import { MyAccountPage } from '../../pages/MyAccountPage';
import { searchProducts } from '../../data/searchData';

// let myAccountPage: MyAccountPage;

// test.beforeEach(async ({page})=>{
//     const user=getUserData();
//     const homepage=new HomePage(page);
//     await homepage.goto();
//     const loginPage=await homepage.gotoLoginPage();
//     myAccountPage=await loginPage.doLoginWith(user.emailAddress, user.password);

// });

for (const product of searchProducts){
    test(`Search product functionality : ${product}`, async ({page, myAccountPage})=>{

        const searchResultPage=await myAccountPage.searchForProduct(product);
        await expect(page).toHaveURL(/search_query=/);
        await expect(page.locator('#search_query_top')).toHaveValue(product);
    });
}
