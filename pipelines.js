// Get today's date.
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); 
const yyyy = today.getFullYear();
today = `/${yyyy}/${mm}/${dd}`;

// Set config object.
// Do not include trailing slash.
const pipelines = {
  sand: {
    urlEditing: 'https://dev-sand-ca-gov.pantheonsite.io',
    urlViewing: 'http://development.sand.ca.gov.s3-website-us-west-1.amazonaws.com',
    actionsLog: 'https://github.com/cagov/odi-publishing-11ty-sandbox/actions',
    postPrefix: '',
  },
  cannabis_test: {
    urlEditing: 'https://test-cannabis-ca-gov.pantheonsite.io/',
    urlViewing: 'http://test.cannabis.ca.gov.s3-website-us-west-1.amazonaws.com',
    actionsLog: 'https://github.com/cagov/cannabis.ca.gov/actions',
    postPrefix: today
  },
};

export default pipelines;
