import{ test, expect } from '@playwright/test';
test('Verify product count' , async ({page}) =>{
await page.goto('https://qapracticehub.com/?utm_source=chatgpt.com#shopping');
const products= page.getByTestId('shop-product-name');
await expect(products).toHaveCount(8);
}
);