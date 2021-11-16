const config = {
  retries: 2,
  video: 'on',
  timeout: 180000,
  use: {
    headless: true,
    viewport: { width: 1020, height: 1720 },
    ignoreHTTPSErrors: false,
    trace: 'on',
  },
};

export default config;
