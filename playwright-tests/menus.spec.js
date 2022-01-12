import { expect, test } from '@playwright/test';
import pipelines from '../pipelines.js';
import variablesWP from './includes/variables.js';
import delay from './includes/delay.js';

const pipeline = pipelines[variablesWP.pipeline];

test.describe.serial('menus', () => {
  // Create and publish.
  test('publish-menus', async ({ page, context }) => {
    // Get Random string from cookie.
    const stringTitle = (await context.storageState()).cookies[0].value;

    // Login.
    await page.goto(pipeline.urlEditing + variablesWP.pathLogin);
    await page.fill(variablesWP.selectorLogin, variablesWP.username);
    await page.fill(variablesWP.selectorPass, variablesWP.password);
    await page.click('[aria-label="Show password"]');
    await page.click('[type=Submit]');

    // Go to menu page.
    await page.goto(`${pipeline.urlEditing}/wp-admin/nav-menus.php?action=edit&menu=8`);

    // Select the default menu.
    await Promise.all([page.waitForNavigation(), page.click('input:has-text("Select")')]);
    await page.click('text=Custom Links Press return or enter to open this section');

    // Fill in the menu item name.
    await page.click('#custom-menu-item-name');
    await page.fill('#custom-menu-item-name', `menu-${stringTitle}`);

    // Fill in the menu item url.
    await page.click('[placeholder="https://"]');
    await page.fill('[placeholder="https://"]', `/menu-${stringTitle}`);

    // Add item to main menu.
    await page.click('input[name="add-custom-menu-item"]');
    await page.waitForSelector(`text="menu-${stringTitle}"`);

    // Save menu.
    await page.click('text=Delete Menu Save Menu >> input[name="save_menu"]');
  });

  test('see-menu', async ({ page, context }) => {
    const pageViewing = `${pipeline.urlViewing}`;
    const delayInSeconds = 3 * 60;
    const maxTries = 10;

    // We get the title from a cookie set at the beginning of the suite.
    const stringTitle = (await context.storageState()).cookies[0].value;
    const selector = `a[href="/menu-${stringTitle}"]`;

    // Increase the test timeout to 5 minutes or the get the setting from .env.
    // 5 minute timeout to accommodate publishing, build, deploy.
    test.setTimeout(variablesWP.timeout ? (parseInt(variablesWP.timeout, 10)) : 30000);

    // Open viewing(headless) URL.
    await page.goto(pageViewing);

    // Logs.
    console.info(`💡 -- View GitHub progress at ${pipeline.actionsLog}`);
    console.info(`💡 -- Testing for '${stringTitle}' at ${pageViewing}...`);

    // Until the selector exists, reload the page after delay.
    let selectorFound = await page.$(selector);

    let tries = 1;
    while (!selectorFound && tries < maxTries + 1) {
      console.log(`💡 -- Selector not found. Attempt ${tries} of ${maxTries}. Waiting ${delayInSeconds}s.`);
      await delay(delayInSeconds * 1000);
      console.log('💡 -- Reloading page');
      await page.reload();
      // Check for the selector again.
      selectorFound = await page.$(selector);
      tries += 1;
    }

    // Send result to log and pass/fail test.
    const message = (selectorFound ? '💡 -- Selector found!' : '💡 -- Too many tries. Selector not found');
    console.log(message);
    await expect(selectorFound).toBeTruthy();
  });
});
