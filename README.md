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

---

# Architecture (as of 11/5/2021)

## Pantheon/Wordpress

Pantheon site name: sand-ca-gov

Pantheon site environment: dev

Pantheon code: https://github.com/cagov/pantheon-mirror-sand-ca-gov (see [readme](https://github.com/cagov/pantheon-mirror-sand-ca-gov#readme) for info on pushing to two remotes)

## Static Site Generator

GitHub repo: odi-publishing-11ty-sandbox

Project config: ./odi-publishing/odi-publishing.json

Wordpress-to-github config: ./wordpress/config/wordpress-to-github.config.json

GitHub actions script: ./.github/workflows/eleventy_build.yml

Local dev command: See GitHub actions script.

## Wordpress-to-Github

_Note: This is a temp approach. May need to set up an Azure FaaS._

Code: https://github.com/zakiya/odi-publisher (This was forked from WordPress to Github)

Endpoint Config: ./WordpressSync/endpoints.json

Github Config: ./local.settings.json

Local command: `npm run hit`

Cron run: [see instructions](https://github.com/zakiya/odi-publisher/local-publish/README.md)

## AWS

URL: http://development.sand.ca.gov.s3-website-us-west-1.amazonaws.com

Bucket name: development.sand.ca.gov
