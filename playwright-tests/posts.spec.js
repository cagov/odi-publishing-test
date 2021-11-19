import { expect, test } from '@playwright/test';
import configSite from '../configSites.js';
import variablesWP from './variables.js';
import checkFor200Response from './includes/check-for-200.js';

test.describe.serial('posts', () => {
  // Create and publish.
  test('publish-posts', async ({ page, context }) => {
    // Get Random string from cookie.
    const stringTitle = (await context.storageState()).cookies[0].value;
    console.log(stringTitle);

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
    await page.fill('#post-title-0', stringTitle);

    // Publish post.
    await page.click('[aria-label="Document tools"]');
    await page.click('button:has-text("Publish")');
    await Promise.all([
      page.waitForNavigation(),
      page.click('[aria-label="Editor publish"] >> text=Publish'),
    ]);
    await page.click(`a:has-text("${stringTitle}")`);
    await expect(page).toHaveURL(`${configSite.dev.urlEditing}/${stringTitle}/`);
  });

  test('see-posts', async ({ page, context }) => {
    const stringTitle = (await context.storageState()).cookies[0].value;
    console.log(stringTitle);
    const pageViewing = `${configSite.dev.urlViewing}/${stringTitle}`;

    // Open viewing(headless) URL. Check if published.
    test.setTimeout(300000); // 5 minute timeout to accommodate publishing, build, deploy.
    await page.goto(pageViewing);
    console.info(`Trying to reach ${pageViewing}...`);
    console.info(`View GitHub progress at ${configSite.dev.actionsLog}`);
    await checkFor200Response(pageViewing);
    await page.goto(pageViewing);
    await expect(page.locator('.page-title')).toContainText(configWP.stringTitle);

    // @todo Delete post when test is done.
  });
});
