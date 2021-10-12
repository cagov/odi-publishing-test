const { test, expect } = require("@playwright/test");

const config = {
  wp_url: "https://dev-drought-ca-gov.pantheonsite.io/",
};

test("publish", async ({ page }) => {
  console.log(config);
  await page.goto(config.wp_url);

  // Login script
  // login();

  // Go to edit environment

  // update page
  // create an incrementatl  variable to add to page

  // save page

  // go to prod

  // see variable on page
  // record time to change appears.
});
