import fetch from 'node-fetch';
import delay from './delay.js';

export default function checkFor200Response(url) {
  return new Promise(async (resolveTop) => {
    console.log(`checking for title at ${url}`);

    function checkFor200ResponseAWS(url) {
      return new Promise(async (resolveInternal) => {
        const response = await fetch(url);
        console.log(response.ok);
        if (!response.ok) {
          console.log('Page not there yet.');
          resolveInternal(false);
        } else {
          console.log('Found valid page.');
          resolveInternal(true);
        }
      });
    }

    async function waitForIsPageAvailable() {
      console.log('Checking for page.');
      const isPageAvailable = await checkFor200ResponseAWS(url);
      if (!isPageAvailable) {
        await delay(15000);
        waitForIsPageAvailable();
      } else {
        resolveTop();
      }
    }
    waitForIsPageAvailable();
  });
}
