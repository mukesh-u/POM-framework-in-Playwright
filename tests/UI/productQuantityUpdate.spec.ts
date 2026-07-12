import {test,expect} from '../../fixtures/testFixture'
import { getUserData } from '../../data/user'
import { HomePage } from '../../pages/HomePage';
import { MyAccountPage } from '../../pages/MyAccountPage';
import { addToCartProducts } from '../../data/addToCartData';

// let myAccountPage:MyAccountPage;

// test.beforeEach(async ({page})=>{
//     const user=getUserData();
//     const homePage=new HomePage(page);
//     await homePage.goto();
//     const loginPage=await homePage.gotoLoginPage();
//     myAccountPage=await loginPage.doLoginWith(user.emailAddress, user.password);
// });

for (const product of addToCartProducts){
    test(`Update quantity for ${product}`, async({myAccountPage})=>{
        const searchResultPage=await myAccountPage.searchForProduct(product);
        const productPage=await searchResultPage.openFirstProduct(product);
        const cartPage=await productPage.clickOnAddToCartButton();
        const orderSummaryPage=await cartPage.clickOnCheckout();

        const initialQuantity=await orderSummaryPage.getTotalQuantity();
        const initialPrice=await orderSummaryPage.getTotalPrice();

        console.log(`Initial quantity is : ${initialQuantity}`);
        console.log(`Initial price is : ${initialPrice}`)

        await orderSummaryPage.increaseQuantity();
        await orderSummaryPage.page.waitForTimeout(1000);

        const updatedQuantity=await orderSummaryPage.getTotalQuantity();
        // console.log(`Updated quantity is : ${updatedQuantity}`)

        const updatedPrice=await orderSummaryPage.getTotalPrice();
        // console.log(`Updated price is : ${updatedPrice}`)

        expect(updatedPrice).toBeGreaterThan(initialPrice);
        expect(updatedQuantity).toBeGreaterThan(initialQuantity);
    })
}