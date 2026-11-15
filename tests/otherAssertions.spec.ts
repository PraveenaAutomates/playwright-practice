import{ test, expect } from '@playwright/test';
test('Learn other assertions' , async ({page}) =>{
await page.goto('https://qapracticehub.com/?utm_source=chatgpt.com#otp-login')
await expect(page).toHaveURL('https://qapracticehub.com/?utm_source=chatgpt.com#otp-login');
const fetchOTPButton= page.getByRole('button' , {name:'Fetch OTP'});
await expect(fetchOTPButton).toBeDisabled();
const userName= page.getByRole('textbox', {name:'Username'});
await userName.fill('test');
await expect(fetchOTPButton).toBeEnabled();
await expect(page.getByTestId('otp-login-message')).toBeAttached();
});
