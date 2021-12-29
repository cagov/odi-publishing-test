# Local testing 

## Essential configuration
-  Copy .env and change values to the WordPress username and password that will be creating content and the pipeline you wish to test. 

    ```
    # Copy example
    cp ./examples/example.env ./.env
    
    # Open in code editor
    code ./.env`
    ```

## NPM scripts

| Script | Description |
| -------- | ----- |
| `test` | Runs all `tests/*.spec.js` files. |
| `test:menus` | Creates a single menu item in WordPress.|
| `test:menus:headed` | `test:menus` run in a non-virtual brower.|
| `test:posts` | Creates a single post in WordPress and tests for it on the headless endpoint.|
| `test:posts:headed` | `test:posts` run in a non-virtual brower.|

## Debugging

- Add `PWDEBUG = 1` to .env file. See [Playwright's documenation](https://playwright.dev/docs/debug) for more information. 
