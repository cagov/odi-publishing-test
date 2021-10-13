# Testing Drought

# Soft Requirements

Equivalents are absolutely fine, but the code examples assume the following locally:

- [VS Code Shell Commands](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

Suggestions for instructions using other editors or OS's are welcome.

## Directions

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

- Run Wordpress sync locally (Will run remotely once this test is more mature.)
  `node $wtg/WordPressSync/debug.js`

- Observe changes to [drought.ca.gov development branch](https://github.com/cagov/drought.ca.gov/tree/development) or see output from previous command.

- Run test
  `npm run test`

## Test debugging

- Add `PWDEBUG = 1` to `.env` to run tests through Playwright Inspector.

- [Playwright Docs](https://playwright.dev/docs/debug)

## @todo

- Verify tests work on Windows machines
