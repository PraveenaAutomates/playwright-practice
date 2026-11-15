import { test, expect } from '@playwright/test';

test('Verify an element is visible', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  const getStartedButton = page.getByRole('link', {
    name: 'Get started'
  });

  await expect(getStartedButton).toBeVisible();

});