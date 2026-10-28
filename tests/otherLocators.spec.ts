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
});
