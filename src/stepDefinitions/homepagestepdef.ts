import {test} from '../fixtures/appFixtures';
import {createBdd} from 'playwright-bdd';
import {expect} from '@playwright/test';

const {Given, When, Then} = createBdd(test);

Given('User lands on the login page', async({homepageHelper}) => {
    await homepageHelper.navigateToHomepage();
    console.log("User landed on the login page");
})

Given('User logs into the app', async({homepageHelper}) => {
    expect(await homepageHelper.logintoHomepage()).toBeTruthy();
    console.log("User logged in");
})