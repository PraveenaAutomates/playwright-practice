//getbylabel
import {test, expect} from '@playwright/test';
test('learnOtherRoles' , async({page})=>
{
await page.goto('https://playwrightlab.github.io/locators.html');
//page.getByLabel()
    await page.getByLabel('Email address').fill('user@example.com');
//Input wrapped by label
await page.getByLabel('Remember me').check();
//Via aria-label
await page.getByLabel('Card number').fill('4242 4242 4242 4242');
//Exact label match
await page.getByLabel('Password', { exact: true }).fill('S3cr3t!');
//page.getByPlaceholder()
//Input by placeholder
await page.getByPlaceholder('Search the docs').fill('locators');
//Textarea by placeholder
await page.getByPlaceholder('Leave a comment…').fill('Great work!');
//Exact placeholder
await page.getByPlaceholder('name@work-email.com', { exact: true }).fill('a@b.com');
//page.getByAltText()
//Find images (and other elements with alt) by their alternative text.
//page.getByAltText()
await expect(page.getByAltText('Mountain landscape')).toBeVisible();
//Clickable image by alt
await page.getByAltText('Product thumbnail').click();
//Alt text with regex
await expect(page.getByAltText(/avatar/i)).toHaveCount(1);
//page.getByTitle()
//Locate elements by their title attribute (shown as a native tooltip on hover).
//Icon button by title
await page.getByTitle('Close dialog').click();
//Text with title tooltip
await expect(page.getByTitle('Verified account')).toBeVisible();
//Link by exact title
await page.getByTitle('Open settings', { exact: true }).click();
//page.getByTestId()
//Locate elements by their data-testid — stable IDs that never change with copy or styling.
//Element by test id
await page.getByTestId('checkout-button').click();
//Scoped inside a container
//await page.getByTestId('product-card').getByRole('button', { name: 'Add' }).click();
});
