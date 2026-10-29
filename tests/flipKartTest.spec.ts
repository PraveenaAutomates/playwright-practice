import{ test,expect } from '@playwright/test'
test ('automate flipkart', async({page} )=>
{
await page.goto('https://www.flipkart.com/');
console.log('Current URL:', page.url());
console.log('Page title:', await page.title());
const searchBox=page.getByPlaceholder('Search for Products, Brands and More').first();
expect(searchBox).toBeVisible();
await searchBox.fill('laptop');
console.log('Input value:', await searchBox.inputValue());
await searchBox.press('Enter');
await page.waitForLoadState('domcontentloaded');
const productTitle = page.getByRole('link', { name: 'Primebook Wifi (2026 Model) MediaTek MT8183 - (4 GB/64 GB EMMC Storage/Prime OS) PB Wifi Thin and Ligh...'});
//await productTitle.click();
//console.log('Matching titles:', await productTitle.count());
});
