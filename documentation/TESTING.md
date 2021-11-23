# Local testing 

## Essential configuration
1. Copy .env and change values to the WordPress username and password that will be creating content. 

    `cp ./examples/example.env ./.env`
    `code ./.env`

## Optional configuration
2. Modify editing and Viewing URL according to your pipeline needs.

    `code ./configSites.js`

3. Change test and browser configuration. This file is also useful for returning values from function that should only run once per test suite. 

    `code ./playwright.config.js`

## NPM scripts

    | Script | Description |
    | -------- | ----- |
    | `test` | Runs all `tests/*.spec.js` files. |
    | `test:menus` | Creates a single menu item in WordPress. (needs work)|
    | `test:posts` | Creates a single post in WordPress and tests for it on the headless endpoint.|
    | `test:posts:headed` | `test:posts` run in a non-virtual brower.|
