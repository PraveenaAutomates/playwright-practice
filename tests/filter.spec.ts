
import { test, expect } from '@playwright/test';

test('practice filter', async ({ page }) => {
  await page.goto('https://www.amazon.in');

  // Search for colouring books
  await page.getByPlaceholder('Search Amazon.in').fill('colouring book');
  await page.locator('#nav-search-submit-button').click();

  // Locate Amazon product cards
  const products = page.locator(
    '[data-component-type="s-search-result"]'
  );

  // Verify that at least one product card becomes visible
  await expect(products.first()).toBeVisible();

  // Count all product cards
  const totalProducts = await products.count();
  console.log('Total products:', totalProducts);

  // Filter cards by text
  const book = products.filter({
    hasText: '555 Coloring Book for Kids'
  });

  // Count matching cards
  const matchingBooks = await book.count();
  console.log('Matching books:', matchingBooks);
});
