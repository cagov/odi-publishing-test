# Local testing 

## Essential configuration
1. Copy .env and change values to the WordPress username and password that will be creating content and the pipeline you wish to test. 

    `cp ./examples/example.env ./.env`
    `code ./.env`

## NPM scripts

    | Script | Description |
    | -------- | ----- |
    | `test` | Runs all `tests/*.spec.js` files. |
    | `test:menus` | Creates a single menu item in WordPress.|
    | `test:menus:headed` | `test:menus` run in a non-virtual brower.|
    | `test:posts` | Creates a single post in WordPress and tests for it on the headless endpoint.|
    | `test:posts:headed` | `test:posts` run in a non-virtual brower.|
