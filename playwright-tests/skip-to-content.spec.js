import { test } from '@playwright/test';
import variables from './includes/variables.js';

test.describe.parallel('skip to content', () => {
  // Set longer time out since screenshots take a sec.
  test.setTimeout(60 * 60 * 1000);
  const { site, port, url } = variables;
  const pageViewing = `${url}${port}`;

  let pagesToTest = [];

  switch (site) {
    case 'cannabis':
      pagesToTest = [
        // landing.njk
        { landing: '' },

        // event.njk
        { event: '2021/12/06/cannabis-advisory-committee-meeting/' },

        // page.njk
        { page: 'resources/rulemaking/' },

        // post.njk
        {
          post: '2022/01/05/californias-cannabis-department-awards-nearly-100-million-in-grants-to-local-governments/',
        },

        // press-release.njk
        {
          pressRelease:
            '2021/12/20/california-to-offer-financial-support-for-cannabis-equity-businesses-through-fee-waivers/',
        },

        // single-column-wide.njk
        { singleColunWide: 'about-us/dcc-events/' },

        // search.njk
        { search: 'serp/?q=cannabis' },

        // single-column.njk
        { singleColumn: 'about-us/announcements/' },
      ];
      break;
    case 'drought':
      pagesToTest = [
        // landing.njk
        { landing: '' },

        // page.njk
        { page: 'current-drought-conditions/' },

        // post.njk
        {
          post: 'as-drought-conditions-deepen-governor-newsom-calls-on-californians-to-take-simple-actions-to-reduce-water-use-2/',
        },

        // single-column.njk
        { singleColumn: 'water-saving-tips/' },

        // search.njk
        { search: 'search/?q=drought' },

        // development-sample-page.njk
        { development: 'development-sample-page/' },
      ];
      break;
    case 'designSystem':
      pagesToTest = [
        { componentIndex: 'components/' },
        // { landing: '' }, template not in use.
        // { page: '' }, template not in use.
        { singleColumn: 'principles/' },
      ];
      break;
    default:
      pagesToTest = [{ landing: '' }];
  }

  // Use a smaller viewport than the default.
  test.use({ viewport: { width: 800, height: 800 } });

  for (const values of Object.values(pagesToTest)) {
    const label = Object.keys(values)[0];
    const path = Object.values(values)[0];

    test(label, async ({ page }) => {
      await page.goto(`${pageViewing}/${path}`);

      // Focus skip to content.
      await page.focus('#skip-to-content a');

      // Take a screenshot of the focus state.
      await page.screenshot({ path: `test-results/screenshots/${site}/focus/${label}.png` });

      // Hit enter to advance page.
      await page.press('text=Skip to content', 'Enter');

      // Hit Tab to focus next input.
      await page.keyboard.press('Tab');

      // Take a screenshot of the tab state.
      await page.screenshot({ path: `test-results/screenshots/${site}/tab/${label}.png` });
    });
  }
});
