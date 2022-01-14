import { test } from '@playwright/test';

test.describe('skipt to content', () => {
  // Set longer time out since screenshots take a sec.
  test.setTimeout(1 * 60 * 1000);

  // Use a smaller viewport than the default.
  test.use({ viewport: { width: 800, height: 800 } });

  test('skip', async ({ page }) => {
    const pageViewing = 'http://localhost:8080';

    // // Cannabis
    // const pagesToTest = [
    //   { landing: '' }, // landing.njk
    //   { event: '2021/12/06/cannabis-advisory-committee-meeting/' }, // event.njk
    //   { page: 'resources/rulemaking/' }, // page.njk
    //   { post: '2022/01/05/californias-cannabis-department-awards-nearly-100-million-in-grants-to-local-governments/' }, // post.njk
    //   { pressRelease: '2021/12/20/california-to-offer-financial-support-for-cannabis-equity-businesses-through-fee-waivers/' }, // press-release.njk
    //   { singleColunWide: 'about-us/dcc-events/' }, // single-column-wide.njk
    //   { search: 'serp/?q=cannabis' }, // search.njk
    //   { singleColumn: 'about-us/announcements/' }, // single-column.njk
    // ];

    // Drought.
    // const pagesToTest = [
    //   { landing: '' }, // landing.njk
    //   { page: 'current-drought-conditions/' }, // page.njk
    //   { post: 'as-drought-conditions-deepen-governor-newsom-calls-on-californians-to-take-simple-actions-to-reduce-water-use-2/' }, // post.njk
    //   { singleColumn: 'water-saving-tips/' }, // single-column.njk
    //   { search: 'search/?q=drought' }, // search.njk
    //   { development: 'development-sample-page/'}, // development-sample-page.njk
    // ];

    // Design system.
    const pagesToTest = [
      { componentIndex: 'components/' },
      // { landing: '' }, template not in use.
      // { page: '' }, template not in use.
      { singleColumn: 'principles/' },
    ];

    for (const pageToTest of pagesToTest) {
      // Set variables.
      const label = Object.keys(pageToTest)[0];
      const path = Object.values(pageToTest)[0];

      // Go to page.
      await page.goto(`${pageViewing}/${path}`);

      // Focus skip to contnet.
      await page.focus('#skip-to-content a');

      // Take a screenshot of the focus state.
      await page.screenshot({ path: `test-results/screenshots/focus/${label}.png` });

      // Hit enter to advance page.
      await page.press('text=Skip to content', 'Enter');

      // Hit Tab to focus next input.
      await page.keyboard.press('Tab');

      // Take a screenshot of the tab state.
      await page.screenshot({ path: `test-results/screenshots/tab/${label}.png` });
    }
  });
});
