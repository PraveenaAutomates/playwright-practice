import { test } from '@playwright/test';

test('nth locator practice', async ({ page }) => {
  await page.goto('https://playwrightlab.github.io/locators.html');

  const firstSectionText = await page.locator('.section').nth(0).innerText();

  console.log('TEST STARTED');
  console.log('FIRST SECTION:', firstSectionText);
});