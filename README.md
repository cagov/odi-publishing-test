# odi-publishing-test

Testing suite for the ODI Publishing system.

## Getting started

`npx playwright install`

`npm run test`

## Soft Requirements

Equivalents are absolutely fine, but the code examples assume the following locally:

- [VS Code Shell Commands](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line)

Suggestions for instructions using other editors or OS's are welcome.

## Test debugging

- Add `PWDEBUG = 1` to `.env` to run tests through Playwright Inspector.

- [Playwright Docs](https://playwright.dev/docs/debug)

## Use the code generator

- `site=dev-sand-ca-gov.pantheonsite.io`

<!-- - `npx playwright codegen $site --save-storage=auth.json` -->

- `npx playwright codegen --load-storage=auth.json $site`

## @todo

- Verify tests work on Windows machines.
- Add steps to delete content created via test.
