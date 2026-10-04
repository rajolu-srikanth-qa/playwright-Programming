import { test, expect } from '@playwright/test';
test('confirm - accept (OK)', async ({ page }) => {
 await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
 page.on('dialog', async (dialog) => {
 expect(dialog.type()).toBe('confirm');
 await dialog.accept();
 });
 await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
 await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});
test('confirm - dismiss (Cancel)', async ({ page }) => {
 await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
 page.on('dialog', async (dialog) => {
 expect(dialog.type()).toBe('confirm');
 await dialog.dismiss();
 });
 await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
 await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});