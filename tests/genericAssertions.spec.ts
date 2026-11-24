import {test , expect } from '@playwright/test';
test('Practice generic assertions', async({page})=>{
await page.goto('https://www.amazon.in/');
const url=page.url();
expect(url).toContain('amazon');
await page.getByPlaceholder('Search Amazon.in').fill('laptop under 35000');
await page.locator('#nav-search-submit-button').click();
const product=page.getByRole('listitem').nth(0);
const priceLocator = page.locator('.a-price-whole').first();
const priceText = await priceLocator.innerText();
console.log(priceText);
const price=Number(priceText.replace(/,/g, '').trim());
expect(price).toBeLessThanOrEqual(35000);
expect(price).toBe(30990);
})
// ==========================================
// PRICE VALIDATION USING GENERIC ASSERTIONS
// ==========================================

// 1. LOCATOR
// page.locator('.a-price-whole') selects elements using CSS class.
// first() selects the first matching element.
// nth(0) is equivalent to first().
// nth() uses zero-based indexing.

// 2. EXTRACT TEXT
// innerText() extracts the visible text from an element.
// It returns a STRING, not a number.

// 3. REMOVE COMMAS
// replace(/,/g, '') removes all commas from the string.
// /,/  = search for a comma.
// g    = global flag (replace all occurrences).
// ''   = replace with an empty string.

// 4. TRIM
// trim() removes whitespace from the beginning and end.
// trimStart() removes whitespace from the beginning.
// trimEnd() removes whitespace from the end.

// 5. TYPE CONVERSION
// Number() converts a numeric string into a number.
// Example: Number('30,990'.replace(/,/g, '')) returns 30990.

// 6. GENERIC ASSERTION
// toBeLessThan() checks whether a number is strictly less.
// toBeLessThanOrEqual() checks whether a number is less than or equal.
// Generic assertions are used for JavaScript values.

// 7. IMPORTANT DIFFERENCE
// innerText() returns a string.
// count() returns a number.
// page.url() returns a string.
// page.title() returns a string.

// ==========================================