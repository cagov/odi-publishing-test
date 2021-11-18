import { expect, test } from '@playwright/test';
// import { check } from 'prettier';
import configSite from './sand/config.js';
import configWP from './wp/config.js';
import checkFor200Response from './includes/check-for-200.js'

test.describe.serial('posts', () => {
  // Create and publish.
  test('publish-posts', async ({ page }) => {
    // Login.
    await page.goto(configSite.dev.urlEditing + configWP.pathLogin);
    await page.fill(configWP.selectorLogin, configWP.username);
    await page.fill(configWP.selectorPass, configWP.password);
    await page.click('[aria-label="Show password"]');
    await page.click('[type=Submit]');

    // Create new Wordpress post.
    await Promise.all([page.waitForNavigation(), page.click('span:has-text("New")')]);
    await page.click('[aria-label="Close dialog"]');
    await page.click('#post-title-0');
    await page.fill('#post-title-0', configWP.stringTitle);

    // Publish post.
    await page.click('[aria-label="Document tools"]');
    await page.click('button:has-text("Publish")');
    await Promise.all([
      page.waitForNavigation(),
      page.click('[aria-label="Editor publish"] >> text=Publish'),
    ]);
    await page.click(`a:has-text("${configWP.stringTitle}")`);
    await expect(page).toHaveURL(
      `https://dev-sand-ca-gov.pantheonsite.io/${configWP.stringTitle}/`,
    );

    console.log('publ-code; npm run hit');
    console.log('https://github.com/cagov/odi-publishing-11ty-sandbox/actions');
  });

  // Open viewing(headless) URL. Check if published.
  test('checkIfPublished', async ({ page }) => {
    test.setTimeout(300000); // 5 minute timeout to accommodate publishing, build, deploy
    const viewUrl = `${configSite.dev.urlViewing}/${configWP.stringTitle}`;
    await checkFor200Response(viewUrl)
    await page.goto(viewUrl);
    await expect(page.locator('.page-title')).toContainText(configWP.stringTitle);
  });

  // @todo Delete post when test is done.
});
