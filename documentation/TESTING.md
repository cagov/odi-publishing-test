# Local Testing 

1. Copy .env and change values to the WordPress username and password that will be creating content. 

    `cp ./examples/example.env ./.env`
    `code ./.env`

2. Change Editing and Viewing URL in config.js.

    `code ./config.js`

3. Run scripts.

    | Script | Description |
    | -------- | ----- |
    | `test` | Runs all `tests/*.spec.js` files. |
    | `test:menus` | Creates a single menu item in WordPress. (needs work)|
    | `test:posts` | Creates a single post in WordPress and tests for it on the headless endpoint.|
