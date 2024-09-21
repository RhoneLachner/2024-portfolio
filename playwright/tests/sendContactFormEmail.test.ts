import { test, expect } from '@playwright/test';
const homepageURL = process.env.HOME_URL || 'http://localhost:3000';

test.beforeEach(async ({ page }) => {
  await page.goto(homepageURL);
  await page.click('button:has-text("Contact")');
  await expect(page).toHaveURL(homepageURL);
});

test.describe('Contact Form: ', () => {
  test.describe('Modal: ', () => {
    test('Overlay is as expected', async ({ page }) => {
      const modal = page.locator('.modalOverlay');
      await expect(modal).toBeVisible();
    });
    test('Form content is as expected', async ({ page }) => {
      const form = page.locator('form');
      const modal = page.locator('.modalContent');

      await expect(modal).toBeVisible();
      await expect(form).toBeVisible();
    });
  });

  test.describe('Email: ', () => {
    test('Confirms success message is visible to user', async ({ page }) => {
      await page.route('/api/sendEmail', async (route) => {
        route.fulfill({
          status: 200,
          body: JSON.stringify({
            success: true,
            message: 'Email sent successfully!',
          }),
          contentType: 'application/json',
        });

        await page.fill('input[type="email"]', 'test@example.com');
        await page.fill(
          'textarea',
          'This is a test message for the contact form.'
        );

        await page.click('button:has-text("Send")');

        const successMessage = page.locator('text=Message sent successfully!');
        await expect(successMessage).toBeVisible();
      });
    });

    test(`'Send' action has a 200 response`, async ({ page }) => {
      const responsePromise = page.waitForResponse('**/api/sendEmail');

      await page.fill('input[type="email"]', 'test@example.com');
      await page.fill(
        'textarea',
        'This is a test message for the contact form.'
      );

      await page.click('button:has-text("Send")');

      const response = await responsePromise;
      expect(response.status()).toBe(200);
    });
    // });
  });
});
