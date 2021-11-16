import { expect, test } from '@playwright/test';
import configSite from '../config.js';
import variablesWP from './wp/variables.js';

test.describe.serial('posts', () => {
  const pageViewing = `${configSite.dev.urlViewing}/${variablesWP.stringTitle}`;

  // Create and publish.
  test('publish-posts', async ({ page }) => {
    // Login.
    await page.goto(configSite.dev.urlEditing + variablesWP.pathLogin);
    await page.fill(variablesWP.selectorLogin, variablesWP.username);
    await page.fill(variablesWP.selectorPass, variablesWP.password);
    await page.click('[aria-label="Show password"]');
    await page.click('[type=Submit]');

    // Create new Wordpress post.
    await Promise.all([page.waitForNavigation(), page.click('span:has-text("New")')]);
    await page.click('[aria-label="Close dialog"]');
    await page.click('#post-title-0');
    await page.fill('#post-title-0', variablesWP.stringTitle);

    // Publish post.
    await page.click('[aria-label="Document tools"]');
    await page.click('button:has-text("Publish")');
    await Promise.all([
      page.waitForNavigation(),
      page.click('[aria-label="Editor publish"] >> text=Publish'),
    ]);
    await page.click(`a:has-text("${variablesWP.stringTitle}")`);
    await expect(page).toHaveURL(`${configSite.dev.urlEditing}/${variablesWP.stringTitle}/`);

    // Open viewing(headless) URL. Check if published.
    console.info(`Trying to reach ${pageViewing}...`);
    console.info(`View GitHub progress at ${configSite.dev.actionsLog}`);
    await page.goto(pageViewing, {
      timeout: 120000,
    });
    await expect(page.locator('.page-title')).toContainText(variablesWP.stringTitle);

    // @todo Delete post when test is done.
  });
});
