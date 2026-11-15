import{ test, expect } from '@playwright/test';
test ('Verify text entered in text fields',async ({page}) => {
await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await expect(page.getByPlaceholder('Username')).toHaveValue('standard_user');
});