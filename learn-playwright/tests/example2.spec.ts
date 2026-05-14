import { test, expect, Page } from '@playwright/test';

/**
 * 1. Open the page
 * 2. Click the "Get started"
 * 3. Mouse hover the language dropdown
 * 4. Click the Java
 * 5. Check the URL
 * 6. Check the text "Installing Playwright" is not being displayed
 * 7. Check the text below is displayed
 * 
 * Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.
 */

test ('check Java page', async ({ page }: { page: Page }) => {
    await page.goto('https://playwright.dev/');

    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('button', { name: 'Node.js' }).hover();
    await page.getByRole('link', { name: 'Java' }).click();

    await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
    await expect(page.getByText('Installing Playwright', { exact: true })).not.toBeVisible();

    const javaDescription = 'Playwright is a Node.js library to automate Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.';
    await expect(page.getByText(javaDescription)).toBeVisible();
});