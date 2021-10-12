# Testing Drought

- Set paths in terminal (optional)

  `wtg=~/Sites/wordpress-to-github`

  `odt=~/Sites/odi-publishing-test`

- Change [endpoints.json line 34](https://github.com/cagov/wordpress-to-github/blob/main/WordpressSync/endpoints.json#L34) to `"enabledLocal": true,`

  `code $wtg/WordpressSync/endpoints.json`

- Copy examples/local.settings.json from this repo to wordpress to github and change values as needed.

  `cp $odt/examples/example.local.settings.json $wtg/local.settings.json`

- Copy .env and change values to your own WordPress username and password.

  `cp $odt/examples/example.env $odt.env` and change values.

- Visit https://dev-drought-ca-gov.pantheonsite.io/ and make an edit.

- Observe changes to [drought.ca.gov development branch](https://github.com/cagov/drought.ca.gov/tree/development)
