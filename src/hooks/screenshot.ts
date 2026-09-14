import {createBdd} from 'playwright-bdd';
import {test} from '../fixtures/appFixtures';

const {AfterStep} = createBdd(test);

AfterStep(async({page, $testInfo})=>{
    const screenshotObject = await page.screenshot();
    await $testInfo.attach('Screenshot', 
        {
            body: screenshotObject,
            contentType: 'image/png'
        });
});