import { test } from '@playwright/test';

test('skip', async ({ page, context }) => {
  const pageViewing = 'http://localhost:8080';

  const pathsToTest = [
    { landing: '' }, // landing.njk
    { event: '2021/12/06/cannabis-advisory-committee-meeting/index.html' }, // event.njk
    { page: 'resources/rulemaking/index.html' }, // page.njk
    { post: '2021/12/21/department-of-cannabis-control-files-emergency-regulations-for-equity-fee-waivers-public-comment-period-begins-today/index.html' }, // post.njk
    { pressRelease: '2021/12/21/californias-cannabis-department-seeks-members-for-cannabis-advisory-committee/index.html' }, // press-release.njk
    { singleColunWide: 'about-us/dcc-events/index.html' }, // single-column-wide.njk
    { search: 'serp/index.html?q=cannabis' }, // search.njk
    { singleColumn: 'about-us/announcements/index.html' }, // single-column.njk
  ];

  // Set longer time out since screenshots take a sec.
  test.setTimeout(1 * 60 * 1000);

  for (const path of pathsToTest) {
    await page.goto(`${pageViewing}/${Object.values(path)}`);

    // Focus skip to contnet.
    await page.focus('#skip-to-content a');

    // Hit enter to advance page.
    await page.press('text=Skip to content', 'Enter');

    // Hit Tab to focus next input.
    await page.keyboard.press('Tab');

    // Take a screen shot.
    await page.screenshot({ path: `test-results/screenshots/${Object.keys(path)}.png` });

  }
});
