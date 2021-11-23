# Architecture (as of 11/10/2021)

## Pantheon/Wordpress (Editor)

| Property | Value |
| -------- | ----- |
| Pantheon site name| sand-ca-gov|
| Pantheon site environment|dev|
| Pantheon code| [pantheon-mirror-sand-ca-gov](https://github.com/cagov/pantheon-mirror-sand-ca-gov)<sup>1</sup>|

<sup>1</sup>
See [readme](https://github.com/cagov/pantheon-mirror-sand-ca-gov#readme) for info on pushing to two remotes)

---

## Wordpress-to-Github (Publisher)

| Property | Value |
| -------- | ----- |
| Code | [odi-publisher](https://github.com/zakiya/odi-publisher)<sup>2</sup> |
| Endpoint Config | ./WordpressSync/endpoints.json|
| Azure Function App | FA-GO-WORDPRESS-TO-GITHUB-SAND-CA-GOV <sup>3</sup>|

<sup>2</sup>
This was forked from WordPress to Github

<sup>3</sup>
See [Set up a new FaaS service wiki page](https://github.com/cagov/odi-engineering/wiki/Set-up-a-new-FaaS-service) for more configuration information.

---

## Static Site Generator (Builder)

| Property | Value |
| -------- | ----- |
|GitHub repo|odi-publishing-11ty-sandbox|
|Primary git branch| `main`|
|Project config|./odi-publishing/odi-publishing.json|
|Wordpress-to-github config| ./wordpress/config/wordpress-to-github.config.json|
|GitHub actions script| ./.github/workflows/eleventy_build.yml|
|Local dev command| See GitHub actions script.|

---

## AWS

| Property | Value |
| -------- | ----- |
|URL| http://development.sand.ca.gov.s3-website-us-west-1.amazonaws.com|
|Bucket name| development.sand.ca.gov|
