import {Locator, Page} from "@playwright/test";

export default class HomepagePo {
    
    readonly usernameInput: Locator;
    readonly password: Locator;
    readonly user: Locator;
    readonly termsAndConditions: Locator;
    readonly loginButton: Locator;

    constructor(private page: Page){
        this.usernameInput = page.locator('#username');
        this.password=page.locator('#password');
        this.user = page.locator('select.form-control');
        this.termsAndConditions = page.locator('#terms');
        this.loginButton = page.locator('#signInBtn');
    }
}