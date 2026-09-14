import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

dotenv.config({ override: true });//loads the contents of the .env file into process.env

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: [
    'src/stepDefinitions/*.ts',
    'src/fixtures/appFixtures.ts',
    'src/hooks/screenshot.ts'],
  outputDir: '.features-gen',
});

export default defineConfig({
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : 2,

  reporter: [
  ['html'],
  ['json', { outputFile: 'test-results/results.json' }]
],
  
  use: {
    baseURL: process.env.BASE_URL!,
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ]
});
