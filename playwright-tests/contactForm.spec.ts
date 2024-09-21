import { test, expect } from '@playwright/test';

test('opens Contact modal when the Contact button is clicked', async ({
  page,
}) => {
  // Go to the homepage
  await page.goto('http://localhost:3000/');

  await page.click('button:has-text("Contact")');

  const modal = await page.locator('.modalContent');

  await expect(modal).toBeVisible();

  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('textarea', 'This is a test message');

  await page.click('button:has-text("Send")');
});
