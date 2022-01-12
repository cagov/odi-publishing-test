# Architecture (as of 12/28/2021)

## Pantheon/Wordpress (Editor)

| Property | Value |
| -------- | ----- |
| Pantheon site name| cannabis-ca-gov|
| Pantheon site environment|test|
| Pantheon code| [pantheon-mirror-cannabis-ca-gov](https://github.com/cagov/pantheon-mirror-cannabis-ca-gov)|


---

## Wordpress-to-Github (Publisher)

| Property | Value |
| -------- | ----- |
| Code | [services-wordpress-to-github-cannabis-ca-gov](https://github.com/cagov/services-wordpress-to-github-cannabis-ca-gov) |
| Endpoint Config | ./WordpressSync/endpoints.json|
| Azure Function App | FA-GO-WORDPRESS-TO-GITHUB-CANNABIS-CA-GOV |


---

## Static Site Generator (Builder)

| Property | Value |
| -------- | ----- |
|GitHub repo|cannabis.ca.gov|
|Primary git branch| `test`|
|Project config|./odi-publishing/odi-publishing.json|
|Wordpress-to-github config| ./odi-publishing/wordpress-to-github.config.json|
|GitHub actions script| ./.github/workflows/eleventy_build.yml ???|
|Local dev command| See GitHub actions script.|

---

## AWS

| Property | Value |
| -------- | ----- |
|URL| http://test.cannabis.ca.gov.s3-website-us-west-1.amazonaws.com|
|Bucket name| test.cannabis.ca.gov|
