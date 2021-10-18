# Testing Drought

## Directions

- Set paths in terminal (optional)

  `wtg=~/Sites/wordpress-to-github`

  `odt=~/Sites/odi-publishing-test`

- ⚙️ Change [endpoints.json line 34](https://github.com/cagov/wordpress-to-github/blob/main/WordpressSync/endpoints.json#L34) to `"enabledLocal": true,`

  `code $wtg/WordpressSync/endpoints.json`

  (locally)

- ⚙️ Copy examples/local.settings.json from this repo to wordpress to github and change values as needed.

  `cp $odt/examples/example.local.settings.json $wtg/local.settings.json`

  (locally)

- ⚙️ Copy .env and change values to your own WordPress username and password.

  `cp $odt/examples/example.env $odt.env` and change values.

  (locally)

- ⚙️ Make sure [this project's config](https://github.com/cagov/drought.ca.gov/blob/development/wordpress/wordpress-to-github.config.json) is correct.

  **⚠️⚠️ONLY MAKE THIS CHANGE ON THE `development` BRANCH.⚠️⚠️**

  `"disabled": false,`

  `"wordpress_source_url": "https://dev-drought-ca-gov.pantheonsite.io",`

  (remotely)

- Visit https://dev-drought-ca-gov.pantheonsite.io/ and make an edit.

- Run Wordpress sync locally (Will run remotely once this test is more mature.)

  `node $wtg/WordPressSync/debug.js`

- Observe changes to [drought.ca.gov development branch](https://github.com/cagov/drought.ca.gov/tree/development) or see output from previous command.

<!-- @todo

## Directions - Option 2 - WordPress Notifications Trigger

- ⚙️ Enable Notifications on WordPress

  `https://dev-drought-ca-gov.pantheonsite.io/wp-admin/edit.php?post_type=notification` -->
