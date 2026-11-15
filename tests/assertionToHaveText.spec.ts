import{test,expect} from '@playwright/test';
test('Verify an element to have text' , async ({page})=> {

await page.goto('https://playwright.dev/');
const getStartedbutton=page.getByText('Get started');
await expect(getStartedbutton).toBeVisible();
await expect(getStartedbutton).toHaveText('Get started');

const heading= page.getByRole('heading',{name:'Playwright Test',exact:true})
await expect(heading).toContainText('Playwright Test');
});