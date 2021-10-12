const { test, expect } = require("@playwright/test");

// @todo Move to separate file.
const config = {
  wp_url: "https://dev-drought-ca-gov.pantheonsite.io",
  wp_login_path: "/wp-login.php",
};

const login = () => {
  console.log("--login");
};

test("publish", async ({ page }) => {
  await page.goto(config.wp_url + config.wp_login_path);
  login();

  // Go to edit environment
  // update page
  // create an incrementatl  variable to add to page
  // save page
  // go to prod
  // see variable on page
  // record time to change appears.
});
