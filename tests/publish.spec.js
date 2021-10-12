import { test, expect } from "@playwright/test";
import config from "./drought/config.js";

test("publish", async ({ page }) => {
  // Login.
  await page.goto(config.wp_url + config.wp_login_path);
  await page.fill(config.selector_login, config.username);
  await page.fill(config.selector_pass, config.password);
  await page.click("[type=Submit]");
  // Go to edit environment
  // update page
  // create an incrementatl  variable to add to page
  // save page
  // go to prod
  // see variable on page
  // record time to change appears.
});
