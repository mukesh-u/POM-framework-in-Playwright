import {test,expect} from '../../fixtures/testFixture'
import { getUserData } from '../../data/user'
import { HomePage } from '../../pages/HomePage';
import { addToCartProducts } from '../../data/addToCartData';
import { MyAccountPage } from '../../pages/MyAccountPage';

// let myAccountPage:MyAccountPage;

// test.beforeEach(async({page})=>{
//     const user=getUserData();
//     const homepage=new HomePage(page);
//     homepage.goto();
//     const loginPage=await homepage.gotoLoginPage();
//     myAccountPage=await loginPage.doLoginWith(user.emailAddress,user.password);
// });

for (const product of addToCartProducts){
    test(`Remove product from cart ${product}`, async ({myAccountPage}) => {
        const searchResultPage=await myAccountPage.searchForProduct(product);
        const productPage=await searchResultPage.openFirstProduct(product);
        const cartPage=await productPage.clickOnAddToCartButton();
        const orderSummaryPage=await cartPage.removeFromCart();
        await expect(orderSummaryPage.shoppingCartEmptyTextLocator).toBeVisible();
        
    })
}