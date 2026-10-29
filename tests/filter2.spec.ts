import{test,expect} from '@playwright/test';
test ('filter practice2 ',async({page})=>
{
await page.goto('https://qapracticehub.com');
await page.getByTestId('nav-shopping').click();
await expect(page).toHaveURL('https://qapracticehub.com/#shopping');
const products=page.getByTestId('shop-product');
console.log('total products:',products.count());
const headPhones=products.filter({hasText :'Wireless Headphones'});
const addtoCart=headPhones.getByTestId('shop-add-to-cart');
await expect(addtoCart).toBeVisible();
await addtoCart.click();
//const controls = headPhones.locator('.shop-product-actions');
const value =headPhones.getByTestId('shop-qty-value');
console.log('Quantity elements:', await value.count());
console.log('Quantity text:', await value.allInnerTexts());
//expect(controls).toBeVisible();
//expect(controls.getByTestId('shop-qty-value')).toHaveText('1');
}
);