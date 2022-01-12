import { expect, test } from '@playwright/test';
import pipelines from '../pipelines.js';
import variablesWP from './includes/variables.js';
import checkFor200Response from './includes/check-for-200.js';

const pipeline = pipelines[variablesWP.pipeline];

test.describe.serial('posts', () => {
  // Create and publish.
  test('publish-posts', async ({ page, context }) => {
    console.log(`💡 -- Testing pipeline: ${variablesWP.pipeline}`);

    // Get Random string from cookie.
    const stringTitle = (await context.storageState()).cookies[0].value;

    // Login.
    await page.goto(pipeline.urlEditing + variablesWP.pathLogin);
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
    await expect(page).toHaveURL(`${pipeline.urlEditing}${pipeline.postPrefix}/${stringTitle}/`);

    console.log(`💡 -- Post created with title: ${stringTitle}`);
  });

  test('see-posts', async ({ page, context }) => {
    // We get the title from a cookie set at the beginning of the suite.
    const stringTitle = (await context.storageState()).cookies[0].value;
    const pageViewing = `${pipeline.urlViewing}${pipeline.postPrefix}/${stringTitle}`;

    // Increase the test timeout to 5 minutes or the get the setting from .env.
    // 5 minute timeout to accommodate publishing, build, deploy.
    test.setTimeout(variablesWP.timeout ? (parseInt(variablesWP.timeout, 10)) : 30000);

    // Open viewing(headless) URL. Check if published.
    await page.goto(pageViewing);

    // Logs.
    console.info(`💡 -- View GitHub progress at ${pipeline.actionsLog}`);
    console.info(`💡 -- Testing for '${stringTitle}' at ${pageViewing}...`);

    // Once page returns a 200, got to view url and test.
    await checkFor200Response(pageViewing);
    await page.goto(pageViewing);
    await expect(page.locator('.page-title')).toContainText(stringTitle);

    // @todo Delete post when test is done.
  });
});
