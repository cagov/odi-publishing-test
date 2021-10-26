# Testing Sandbox

## Directions for local

For the purposes of this repo, use the wordpress-to-github's `sandbox-testing` tag

- 1. Set paths in terminal (optional)

  `wtg=~/Sites/wordpress-to-github`

  `odt=~/Sites/odi-publishing-test`

- 2. Set proper configuration files.

  - a. Copy examples/local.endpoints.json from this repo to wordpress-to-github.

    `cp $odt/examples/example.endpoints.json $wtg/WordpressSync/endpoints.json`

    (locally - do not commit)

  - b. Copy examples/example.local.settings.json from this repo to wordpress-to-github and change values as needed.

    `cp $odt/examples/example.local.settings.json $wtg/local.settings.json`

    (locally - do not commit)

  - c. Make sure [the target wordpress site's config](https://github.com/cagov/odi-publishing-11ty-sandbox/blob/development/wordpress/config/wordpress-to-github.config.json) is correct.

  **⚠️⚠️ONLY MAKE THIS CHANGE ON THE `development` BRANCH.⚠️⚠️**

  `"disabled": false,`

  `"wordpress_source_url": "https://dev-drought-ca-gov.pantheonsite.io",`

  `"outputBranch": "development",`

  (remotely)

- 3. Copy .env and change values to your own WordPress username and password.

  `cp $odt/examples/example.env $odt.env` and change values.

  (locally)

- Visit https://dev-drought-ca-gov.pantheonsite.io/ and make an edit.

- Run Wordpress sync locally (Will run remotely once this test is more mature.)

  `node $wtg/WordPressSync/debug.js`

- Observe changes to [drought.ca.gov development branch](https://github.com/cagov/drought.ca.gov/tree/development) or see output from previous command.

<!-- @todo

## Directions - Option 2 - WordPress Notifications Trigger

- ⚙️ Enable Notifications on WordPress

  `https://dev-drought-ca-gov.pantheonsite.io/wp-admin/edit.php?post_type=notification` -->
