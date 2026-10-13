import{ test , expect }from '@playwright/test';
test('deepDiveRoles', async({page})=>
{
await page.goto('https://playwrightlab.github.io/locators.html');
//button
await page.getByRole('button',{name :'Submit order'}).click();
//link
await page.getByRole('link', { name: 'Documentation', exact: true }).click();
//heading
await expect(page.getByRole('heading', {level:3,name:'Account settings'})).toBeVisible();
//textbox
await page.getByRole('textbox', { name: 'Full name'}).fill('Praveena');
//searchbox
await page.getByRole('searchbox', { name:'Search site'}).fill('iphone');
//checkbox
await page.getByRole('checkbox', {name:'Subscribe'}).check();
//radiobutton
await page.getByRole('radio',{name:'Standard shipping'}).click();
//meter (normally a readonly indicator of a measurement in a webpage)
await expect(page.getByRole('meter',{name:'Disk usage'})).toHaveAttribute('value','6');
//combobox
await page.getByRole('combobox' ,{name:'Country'}).selectOption('India');
//spinbutton
await page.getByRole('spinbutton',{name:'Quantity'}).fill('4');
//slider
await page.getByRole('slider',{name:'Volume'}).fill('60');
//table row & cell
await page.getByRole('row',{name:'Alan Turing'}).getByRole('cell', {name:'Editor'}).click();
//list
await expect(page.getByRole('listitem')).toHaveCount(6);
//progressbar
await expect(page.getByRole('progressbar', { name: 'Upload' })).toHaveAttribute('value', '65');
//dialog
const dialog=page.getByRole('dialog',{name:'Delete item'});
await dialog.getByRole('button',{name:'Confirm'}).click();
//image
await expect(page.getByRole('img',{name:'Team photo'})).toBeVisible();
});


