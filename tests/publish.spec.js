import { expect, test } from '@playwright/test';
import configSite from './sand/config.js';
import configWP from './wp/config.js';

test.describe.serial('suite', () => {
  // Create and publish.
  test('publish', async ({ page }) => {
    // Login to WordPress.
    await page.goto(configSite.dev.urlEditing + configWP.pathLogin);
    await page.fill(configWP.selectorLogin, configWP.username);
    await page.fill(configWP.selectorPass, configWP.password);
    await page.click('[type=Submit]');

    // Create new Wordpress page and publish.
    await Promise.all([page.waitForNavigation(), page.click('span:has-text("New")')]);
    await page.click('[aria-label="Close dialog"]');
    await page.click('textarea');
    await page.fill('textarea', configWP.stringTitle);
    await page.click('.edit-post-header button.components-button.is-primary.has-icon');
    // Posts will need a body.
    // await Promise.all([
    //   page.waitForNavigation(),
    //   page.click('[aria-label="Editor publish"] >> text=Publish'),
    // ]);
  });

  // Check if published.
  test('checkIfPublished', async ({ page }) => {
    await page.goto(`${configSite.dev.urlViewing}/${configWP.stringTitle}`);
    await expect(page.locator('.page-title')).toContainText(configWP.stringTitle);
  });

  // Delete.
  test('delete', async ({ page }) => {
    // Delete post when test is done.
  });
});
