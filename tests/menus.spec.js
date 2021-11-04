import { test } from '@playwright/test';
import configSite from './sand/config.js';
import configWP from './wp/config.js';

test('menus', async ({ page }) => {
  // Login.
  await page.goto(configSite.dev.urlEditing + configWP.pathLogin);
  await page.fill(configWP.selectorLogin, configWP.username);
  await page.fill(configWP.selectorPass, configWP.password);
  await page.click('[aria-label="Show password"]');
  await page.click('[type=Submit]');

  // Go to menu page.
  await page.goto(`${configSite.dev.urlEditing}/wp-admin/nav-menus.php?action=edit&menu=8`);

  // Select the main menu.
  await Promise.all([page.waitForNavigation(), page.click('input:has-text("Select")')]);
  await page.click('text=Custom Links Press return or enter to open this section');

  // Fill in the menu item name.
  await page.click('input[name="menu-item[-19][menu-item-title]"]');
  await page.fill('input[name="menu-item[-19][menu-item-title]"]', `Menu-${configWP.stringTitle}`);

  // Fill in the menu item url.
  await page.click('[placeholder="https://"]');
  await page.fill('[placeholder="https://"]', `/menu-${configWP.stringTitle}`);

  // Add item to main menu.
  await page.click('input[name="add-custom-menu-item"]');
  await page.waitForSelector(`text="Menu-${configWP.stringTitle}"`);

  // Save menu.
  await page.click('text=Delete Menu Save Menu >> input[name="save_menu"]');

  // @todo Test for menu item on viewing site.
  // @todo Delete the menu item.
});
