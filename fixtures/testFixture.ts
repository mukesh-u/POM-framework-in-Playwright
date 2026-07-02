import {test as base} from '@playwright/test'
import { MyAccountPage } from '../pages/MyAccountPage'
import { getUserData } from '../data/user';
import { HomePage } from '../pages/HomePage';

type MyFixtures={
    myAccountPage:MyAccountPage;
}

export const test=base.extend<MyFixtures>({
    myAccountPage:async ({page}, use)=>{
        const user=getUserData();
        const homePage=new HomePage(page);
        await homePage.goto();
        const loginPage=await homePage.gotoLoginPage();
        const myAccountPage=await loginPage.doLoginWith(user.emailAddress,user.password);
        await use(myAccountPage);
    }
})

export {expect} from '@playwright/test'