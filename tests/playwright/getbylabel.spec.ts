import { test, expect } from '@playwright/test';

test('getByLabel examples', async ({ page }) => {
  await page.goto('https://example.com/register');

  await page.getByLabel('First Name').fill('Priya');
  await page.getByLabel('Email Address').fill('priya@gmail.com');
  await page.getByLabel('Password').fill('Password@123');
  await page.getByLabel('Gender').selectOption('Female');
  await page.getByLabel('I agree to Terms').check();

  await expect(page.getByLabel('Email Address')).toHaveValue('priya@gmail.com');
  await expect(page.getByLabel('I agree to Terms')).toBeChecked();

  await page.getByRole('button', { name: 'Register' }).click();
});
