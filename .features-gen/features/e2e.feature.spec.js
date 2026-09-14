// Generated from: features\e2e.feature
import { test } from "../../src/fixtures/appFixtures.ts";

test.describe('E2E RetirePlus Subscription Feature', () => {

  test('RetirePlus Subscription flow', async ({ Given, Then, homepageHelper, page }) => { 
    await Given('User lands on the login page', null, { homepageHelper, page }); 
    await Then('User logs into the app', null, { homepageHelper, page }); 
  });

  test('RetirePlus Unsub flow', async ({ Given, Then, homepageHelper, page }) => { 
    await Given('User lands on the login page', null, { homepageHelper, page }); 
    await Then('User logs into the app', null, { homepageHelper, page }); 
  });

  test('RetirePlus Model change flow', async ({ Given, Then, homepageHelper, page }) => { 
    await Given('User lands on the login page', null, { homepageHelper, page }); 
    await Then('User logs into the app', null, { homepageHelper, page }); 
  });

  test('RetirePlus Allocations flow', async ({ Given, Then, homepageHelper, page }) => { 
    await Given('User lands on the login page', null, { homepageHelper, page }); 
    await Then('User logs into the app', null, { homepageHelper, page }); 
  });

  test('RetirePlus Rebalance flow', async ({ Given, Then, homepageHelper, page }) => { 
    await Given('User lands on the login page', null, { homepageHelper, page }); 
    await Then('User logs into the app', null, { homepageHelper, page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\e2e.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User lands on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User logs into the app","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User lands on the login page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User logs into the app","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given User lands on the login page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User logs into the app","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given User lands on the login page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User logs into the app","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User lands on the login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User logs into the app","stepMatchArguments":[]}]},
]; // bdd-data-end