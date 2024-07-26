import { test, expect } from '@playwright/test';

test.describe('Themed tests', () => {
  test.beforeEach(async ({ page, browserName }) => {
    const theme = process.env.THEME || 'light';
    await page.addInitScript(`document.documentElement.setAttribute('data-theme', '${theme}')`);
  });

  test('should have correct theme', async ({ page }) => {
    const theme = process.env.THEME || 'light';
    const themeValue = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(themeValue).toBe(theme);
  });
});
