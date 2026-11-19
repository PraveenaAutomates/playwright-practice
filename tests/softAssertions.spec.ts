import {test,expect} from '@playwright/test';
test('Learn soft assertions' ,async({page})=>{
await page.goto('https://qapracticehub.com/#inputs');

const headingValidate= page.getByRole('heading' ,{name:'Text Inputs'});
//await expect.soft(headingValidate).toHaveText('Text Inputs');
await expect.soft(headingValidate).toHaveText('Wrong heading');


const name=page.getByPlaceholder('Enter your name');
await expect.soft(name).toBeEnabled();
await name.fill('Praveena');

const eMail=page.getByPlaceholder('you@example.com');
await expect.soft(eMail).toBeEnabled();
await eMail.fill('Praveena@gmail.com');

const passWord=page.getByPlaceholder('you@example.com');
await expect.soft(passWord).toBeEnabled();
await passWord.fill('test@123');

const viewPassword=page.getByTestId('password-input-toggle');
await viewPassword.click();
await expect.soft(passWord).toBeVisible();

});
