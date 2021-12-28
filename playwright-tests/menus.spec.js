import { test } from '@playwright/test';
import pipelines from '../pipelines.js';
import variablesWP from './includes/variables.js';

const pipeline = pipelines[variablesWP.pipeline];

test('menus', async ({ page }) => {
  // Login.
  await page.goto(pipeline.urlEditing + variablesWP.pathLogin);
  await page.fill(variablesWP.selectorLogin, variablesWP.username);
  await page.fill(variablesWP.selectorPass, variablesWP.password);
  await page.click('[aria-label="Show password"]');
  await page.click('[type=Submit]');

  // Go to menu page.
  await page.goto(`${pipeline.urlEditing}/wp-admin/nav-menus.php?action=edit&menu=8`);

  // Select the main menu.
  await Promise.all([page.waitForNavigation(), page.click('input:has-text("Select")')]);
  await page.click('text=Custom Links Press return or enter to open this section');

  // Fill in the menu item name.
  await page.click('#custom-menu-item-url');
  await page.fill('#custom-menu-item-url', `Menu-${variablesWP.stringTitle}`);

  // Fill in the menu item url.
  await page.click('[placeholder="https://"]');
  await page.fill('[placeholder="https://"]', `/menu-${variablesWP.stringTitle}`);

  // Add item to main menu.
  await page.click('input[name="add-custom-menu-item"]');
  await page.waitForSelector(`text="Menu-${variablesWP.stringTitle}"`);

  // Save menu.
  await page.click('text=Delete Menu Save Menu >> input[name="save_menu"]');

  // @todo Test for menu item on viewing site.
  // @todo Delete the menu item.
});
