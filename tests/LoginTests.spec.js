const { test, expect } = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require("../testData.json")))

test.describe('Login functionality validation using Decision Table technique', async () => {

    for (const data of testData) {

        test.describe(`Login based on credential combination ${data.id}`, async () => {

            test('Login To The Application', async ({ page }) => {
                await page.goto('https://freelance-learn-automation.vercel.app/login');
                await page.locator('input[type="email"]').fill(data.email);
                await page.locator('input[type="password"]').fill(data.password);
                await page.locator('button[type="submit"]').click();

                // Validate error message for invalid login attempts
                if (data.expected == 'FAIL') {
                    await expect(page.locator('.errorMessage')).toBeVisible();
                }

                // Validate welcome message after successful login
                if (data.expected == 'PASS') {
                    await expect(page.locator('.welcomeMessage')).toBeVisible();
                }
            });

        });

    }
});

