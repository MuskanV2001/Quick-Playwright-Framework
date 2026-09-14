import {Page} from '@playwright/test'
import HomepagePo from '../pages/homepagePo';

export default class HomepageHelper {

    private homepagepo: HomepagePo;;

    constructor(private page: Page) {
        this.page = page;
        this.homepagepo = new HomepagePo(page);
    }

    async navigateToHomepage() {
        await this.page.goto('/loginpagePractise/');
    }

    async logintoHomepage() {
        try{
            await this.homepagepo.usernameInput.fill(process.env.USERNAME!);
            await this.homepagepo.password.fill(process.env.PASSWORD!);
            await this.homepagepo.user.selectOption("teach");
            await this.homepagepo.termsAndConditions.check();
            await this.homepagepo.loginButton.click();
            return true;
        }
        catch(e){
            console.log(`Error logging into homepage: ${e}`);
            return false;
        }
    }
}