import { expect, test } from '@playwright/test';
import pipelines from '../pipelines.js';
import variablesWP from './includes/variables.js';
import checkFor200Response from './includes/check-for-200.js';

const pipeline = pipelines[variablesWP.pipeline];

test.describe.serial('posts', () => {
  // Create and publish.
  test('publish-posts', async ({ page, context }) => {
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

    console.log(`Post created with title: ${stringTitle}`);
  });

  test('see-posts', async ({ page, context }) => {
    const stringTitle = (await context.storageState()).cookies[0].value;
    console.log(stringTitle);
    const pageViewing = `${pipeline.urlViewing}/${stringTitle}`;

    // Open viewing(headless) URL. Check if published.
    test.setTimeout(variablesWP.timeout ? variablesWP.timeout : 30000 ); // 5 minute timeout to accommodate publishing, build, deploy.
    await page.goto(pageViewing);
    console.info(`View GitHub progress at ${pipeline.actionsLog}`);
    await checkFor200Response(pageViewing);
    await page.goto(pageViewing);
    console.info(`Testing for string match at ${pageViewing}...`);
    await expect(page.locator('.page-title')).toContainText(stringTitle);

    // @todo Delete post when test is done.
  });
});
