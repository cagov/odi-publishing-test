import { test, expect } from "@playwright/test";
import config from "./drought/config.js";

test("publish", async ({ page }) => {
  await page.goto(config.wp_url + config.wp_login_path);

  // Go to edit environment
  // update page
  // create an incrementatl  variable to add to page
  // save page
  // go to prod
  // see variable on page
  // record time to change appears.
});
