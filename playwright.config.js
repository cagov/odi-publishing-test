const config = {
  use: {
    headless: false,
    viewport: { width: 1720, height: 1720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    retries: 6,
  },
};

export default config;
