import { test, expect } from '@playwright/test'
import { getUserData } from '../../data/user';
import { LoginPage } from '../../pages/LoginPage';
import { MyAccountPage } from '../../pages/MyAccountPage';
import { HomePage } from '../../pages/HomePage';

test('login & add to cart test', async({page})=>{
    const userData=getUserData();
    const homepage=new HomePage(page);
    await homepage.goto();
    const loginPage=await homepage.gotoLoginPage();
    const MyAccountPage=await loginPage.doLoginWith(userData.emailAddress, userData.password);
    await expect(MyAccountPage.userAccountLocator).toBeVisible();
})