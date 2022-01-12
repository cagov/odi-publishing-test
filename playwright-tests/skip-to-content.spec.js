import { test } from '@playwright/test';

test.describe('skipt to content', () => {
  // Set longer time out since screenshots take a sec.
  test.setTimeout(1 * 60 * 1000);

  // Use a smaller viewport than the default.
  test.use({ viewport: { width: 800, height: 800 } });

  test('skip', async ({ page }) => {
    const pageViewing = 'http://localhost:8080';

    const pagesToTest = [
      { landing: '' }, // landing.njk
      { event: '2021/12/06/cannabis-advisory-committee-meeting/' }, // event.njk
      { page: 'resources/rulemaking/' }, // page.njk
      { post: '2022/01/05/californias-cannabis-department-awards-nearly-100-million-in-grants-to-local-governments/' }, // post.njk
      { pressRelease: '2021/12/20/california-to-offer-financial-support-for-cannabis-equity-businesses-through-fee-waivers/' }, // press-release.njk
      { singleColunWide: 'about-us/dcc-events/' }, // single-column-wide.njk
      { search: 'serp/?q=cannabis' }, // search.njk
      { singleColumn: 'about-us/announcements/' }, // single-column.njk
    ];

    for (const pageToTest of pagesToTest) {
      // Set variables.
      const label = Object.keys(pageToTest)[0];
      const path = Object.values(pageToTest)[0];

      // Go to page.
      await page.goto(`${pageViewing}/${path}`);

      // Focus skip to contnet.
      await page.focus('#skip-to-content a');

      // Hit enter to advance page.
      await page.press('text=Skip to content', 'Enter');

      // Hit Tab to focus next input.
      await page.keyboard.press('Tab');

      // Take a screen shot.
      await page.screenshot({ path: `test-results/screenshots/${label}.png` });
    }
  });
});
