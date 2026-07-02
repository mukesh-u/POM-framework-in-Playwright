import {test,expect} from '../fixtures/testFixture'
import { HomePage} from '../pages/HomePage'
import { MyAccountPage} from '../pages/MyAccountPage'
import { getUserData } from '../data/user'
import { addToCartProducts } from '../data/addToCartData'

// let myAccountPage:MyAccountPage;

// test.beforeEach(async({page})=>{
//     const user=getUserData();
//     const homePage=new HomePage(page);
//     await homePage.goto();
//     const loginPage=await homePage.gotoLoginPage();
//     myAccountPage=await loginPage.doLoginWith(user.emailAddress,user.password);
// });

for (const product of addToCartProducts){
    test(`Add product to cart : ${product}`, async({myAccountPage})=>{
        const searchResultPage=await myAccountPage.searchForProduct(product);
        const productPage=await searchResultPage.openFirstProduct(product);
        const cartPage=await productPage.clickOnAddToCartButton();
        await expect(cartPage.productSuccessfullyAddedMessageLocator).toBeVisible();

    })
}