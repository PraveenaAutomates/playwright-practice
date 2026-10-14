import {test, expect} from '@playwright/test';
//Find elements by their text content — substring, exact, or regular expression.
test('learnTextRoles' , async({page})=>
{
await page.goto('https://playwrightlab.github.io/locators.html');
//substring
await expect(page.getByText('Welcome back,')).toBeVisible();
//exact match
await page.getByText('Delete' , {exact : true}).click();
//regex
await expect(page.getByText(/^\$49\.99$/)).toHaveText('$49.99');
//Filter a list by text
await page.getByRole('listitem').filter({ hasText: 'Premium' }).getByRole('button').click();
}
);