# odi-publishing-test

Testing suite for the ODI Publishing system.

## Getting started

- `npm install`

- See [TESTING](./documentation/TESTING.md) for detailed information.


## Test type 1. Pipelines

- See [sand Architecture](./documentation/ARCHITECTURE_sand.md)
- See [cannabis_test Architecture](./documentation/ARCHITECTURE_cannabis_test.md)
- Add new pipelines at `./pipelines.js`


## Test type 2. Skip to content

A self contained test that will create screenshots of the skip to content action. 

**Base command:** 

`npm run test:skip`  

**Parameters**

|   parameter   | Possible values   | Default value|
| ------------ | ---------------- |----|
| site | `cannabis`, `drought`, or `designSystem` | undefined
| port   | number               | 8080
| url         | url | `http://localhost:`

**Examples**

`npm run test:skip --site=cannabis -port=8081` Test cannabis paths at http://localhost:8081


## Developing Tests

- ODI's [Playwright Testing](https://github.com/cagov/odi-engineering/blob/playwright-docs/playwright.md) and [Writing Unit Tests](https://github.com/cagov/design-system/blob/main/unit-tests.md#delays-for-visual-review) have plenty of advice and code examples. 

## Roadmap

- See [Testing issues](https://github.com/cagov/odi-engineering/labels/Testing)
