
import { test } from '@playwright/test';

test('practice nth, first and last locators', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/locators');

  const headings = page.locator('h2');

  // Count all matching headings
  const total = await headings.count();
  console.log('Total headings:', total);

  // Select the first heading using nth(0)
  const firstHeading = await headings.nth(0).innerText();
  console.log('First heading using nth(0):', firstHeading);

  // Select the first heading using first()
  const first = await headings.first().innerText();
  console.log('First heading using first():', first);

  // Select the last heading using last()
  const last = await headings.last().innerText();
  console.log('Last heading:', last);
});
