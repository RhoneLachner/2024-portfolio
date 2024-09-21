import { test, expect } from '@playwright/test';

test('intercepts and mocks the email API request and confirms success message is visible to user', async ({
  page,
}) => {
  await page.route('/api/sendEmail', async (route) => {
    const postData = route.request().postData();

    console.log('Intercepted request data:', postData);

    route.fulfill({
      status: 200,
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully!',
      }),
      contentType: 'application/json',
    });
  });

  await page.goto('http://localhost:3000/');

  await page.click('button:has-text("Contact")');

  const modal = await page.locator('.modalOverlay');
  await expect(modal).toBeVisible();

  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('textarea', 'This is a test message for the contact form.');

  await page.click('button:has-text("Send")');

  const successMessage = page.locator('text=Message sent successfully!');
  await expect(successMessage).toBeVisible();
});
