import{ test, expect} from '@playwright/test';
test('practice1', async({ page }) => 
{
 await page.goto('https://playwrightlab.github.io/');
 await expect(
    page.getByTestId('hero-badge')).toBeVisible();
   await expect( 
    page.getByTestId('hero-badge')).toHaveText('Your Automation Playground');
});
