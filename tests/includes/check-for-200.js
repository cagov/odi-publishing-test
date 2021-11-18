import fetch from 'node-fetch';
import delay from './delay.js'

export default function checkFor200Response(url) {
  return new Promise(async function(resolveTop) {
    console.log('checking for title at '+url);

    function checkFor200ResponseAWS(url) {
      return new Promise(async function(resolveInternal) {
        const response = await fetch(url);
        console.log(response.ok)
        if (!response.ok) {
          console.log('page not there yet')
          resolveInternal(false)
        } else {
          console.log('found valid page')
          resolveInternal(true)
        }
      });    
    }

    async function waitForIsPageAvailable() {
      console.log('checking for page')
      let isPageAvailable = await checkFor200ResponseAWS(url);
      if(!isPageAvailable) {
        await delay(15000)
        waitForIsPageAvailable();
      } else {
        resolveTop()
      }
    }
    waitForIsPageAvailable();

  });
}