import {test,expect} from '@playwright/test';
test('dashboard',async ({ page }) =>
{
await page.goto('https://playwrightlab.github.io/');
await page.getByTestId('nav-login').click();
await page.getByPlaceholder('you@example.com').fill('test@playlab.com');
await page.getByPlaceholder('Enter your password').fill('Password123');
await page.getByRole('button' ,{name: 'Sign In'}).click();
await expect(page.getByRole('heading' ,{name: 'Welcome back!'})).toBeVisible();
}
);
