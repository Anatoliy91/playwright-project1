import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile',
      use: { ...devices['Pixel 5'] },
    },
  ],
  /* Зробити AUTO-FIXTURE загальною опцією */
  globalSetup: require.resolve('./tests/setup'),
});
