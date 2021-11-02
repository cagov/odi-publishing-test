import { expect, test } from '@playwright/test';
import configSite from './sand/config.js';
import configWP from './wp/config.js';

test.describe.serial('suite', () => {
  test('login', async ({ page }) => {
    await page.goto(configSite.dev.urlEditing + configWP.pathLogin);
    await page.fill(configWP.selectorLogin, configWP.username);
    await page.fill(configWP.selectorPass, configWP.password);
    await page.click('[aria-label="Show password"]');
    await page.click('[type=Submit]');
  });

  // Create and publish.
  test('publish', async ({ page }) => {
    // Create new Wordpress page and publish.
    await Promise.all([page.waitForNavigation(), page.click('span:has-text("New")')]);
    await page.click('[aria-label="Close dialog"]');
    await page.click('#post-title-0');
    await page.fill('#post-title-0', configWP.stringTitle);

    // Click text=Type / to choose a block
    await page.click('text=Type / to choose a block');
    await page.fill('text=Type / to choose a block', configWP.stringTitle);
    // Click [aria-label="Document tools"]
    await page.click('[aria-label="Document tools"]');
    // Click button:has-text("Publish")
    await page.click('button:has-text("Publish")');
    // Click [aria-label="Editor publish"] >> text=Publish
    await Promise.all([
      page.waitForNavigation(/* { url: 'https://dev-sand-ca-gov.pantheonsite.io/wp-admin/post.php?post=791&action=edit' } */),
      page.click('[aria-label="Editor publish"] >> text=Publish'),
    ]);
    // Click a:has-text("safd")
    await page.click('a:has-text("safd")');
    await expect(page).toHaveURL('https://dev-sand-ca-gov.pantheonsite.io/safd/');
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
