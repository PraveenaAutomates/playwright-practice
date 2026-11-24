import {test, expect} from '@playwright/test';
//Find elements by their text content — substring, exact, or regular expression.
test('csslocators' , async({page})=>
    {
await page.goto('https://playwrightlab.github.io/locators.html');
//const total=await page.locator('.section').count();
const firstSectionText= await page.locator(('.section')).nth(0).innerText();
//console.log(total);
console.log(firstSectionText);
    });