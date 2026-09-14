import {test as basetest} from 'playwright-bdd';

import HomepageHelper from '../helpers/homepagehelper';

type appFixtures = {
    homepageHelper: HomepageHelper;
}

export const test = basetest.extend<appFixtures>({
    homepageHelper: async ({page}, use) => {
        const homepageHelper = new HomepageHelper(page);
        await use(homepageHelper);
    }
})
