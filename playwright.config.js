// Set a random number in a cookie for reuse.
const titleSlug = Math.floor(Math.random(999) * 999);
const stringTitle = `test-${titleSlug}`;

const config = {
  retries: 2,
  timeout: 180000,
  use: {
    headless: true,
    viewport: { width: 1020, height: 1720 },
    ignoreHTTPSErrors: false,
    trace: 'on',
    video: 'on',
    storageState: {
      cookies: [
        {
          name: 'stringTitle',
          value: stringTitle,
          domain: 'arbritrary',
          path: '/',
        },
      ],
    },
  },
};

export default config;
