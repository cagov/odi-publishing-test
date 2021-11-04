# Testing Sandbox

## Directions for local

### Setup

- 1. Set paths in terminal (optional)

  `wtg=~/Sites/odi-publisher`

  `odt=~/Sites/odi-publishing-test`

- 2. Set proper configuration files.
     These instructions assume local hosting of wordpress-to-github. In early test wtg was forked to become odi-publisher.

  - a. Verify $wtg/odi-publisher/WordpressSync/endpoints.json

  - b. Copy examples/example.local.settings.json from this repo to wordpress-to-github and change values as needed.

    `cp $odt/examples/example.local.settings.json $wtg/local.settings.json`

  - c. Make sure [the target static site's config](https://github.com/cagov/odi-publishing-11ty-sandbox/blob/main/wordpress/config/wordpress-to-github.config.json) is correct.

  (remotely)

- 3. Copy .env and change values to your own WordPress username and password.

  `cp $odt/examples/example.env $odt.env` and change values.

### Running tests.

- See package.json for test scripts.
- To run Wordpress sync (generate a commit with wp changes) locally:

  ```bash
  code $wtg
  npm run hit
  ```
