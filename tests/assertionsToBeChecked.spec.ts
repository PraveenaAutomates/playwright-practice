import { test , expect } from '@playwright/test';
test('Verify if a check box is checked' , async({page})=> {
await page.goto('https://qapracticehub.com/?utm_source=chatgpt.com#selection');
const checkBox= page.getByRole('checkbox',{ name: 'Playwright' });
await checkBox.check();
await expect(checkBox).toBeChecked();
const radioFemale= page.getByRole('radio', {name:'Female'});
await radioFemale.check();
await expect(radioFemale).toBeChecked();
await expect(page.getByRole('radio',{name :'Male' ,exact:true})).not.toBeChecked();
await checkBox.uncheck();
await expect(checkBox).not.toBeChecked();
}
);