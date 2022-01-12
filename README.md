# odi-publishing-test

Testing suite for the ODI Publishing system.

## Getting started

- `npm install`

- See [TESTING](./documentation/TESTING.md) for detailed information.


## Testing Pipelines:

- See [sand Architecture](./documentation/ARCHITECTURE_sand.md)
- See [cannabis_test Architecture](./documentation/ARCHITECTURE_cannabis_test.md)
- Add new pipelines at `./pipelines.js`

## Other Tests

`npm run test:skip` is a self contained test that will create screenshots of the skip to content action. 
Set the paths and urls in skip-to-content.spec.js

## Developing Tests

- ODI's [Playwright Testing](https://github.com/cagov/odi-engineering/blob/playwright-docs/playwright.md) and [Writing Unit Tests](https://github.com/cagov/design-system/blob/main/unit-tests.md#delays-for-visual-review) have plenty of advice and code examples. 

## Roadmap

- See [Testing issues](https://github.com/cagov/odi-engineering/labels/Testing)
