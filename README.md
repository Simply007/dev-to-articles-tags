# Dev.to article tag grader

Basically adds number of `positive_reactions_count` and `comments_count` for fist 1000 'rising' articles from [dev.to](https://dev.to) using [dev.to beta API](https://docs.dev.to/api/)

## Get started

1. Copy [`.env.template`](`./.env.template`) and name it `.env` then set the `DEV_TO_API_KEY` environment variable to value from [dev.to account setting](https://dev.to/settings/account) -> DEV API Keys

1. Install dependencies

  ```sh
  npm install
  ```

1. Run the script

  ```sh
  npm start
  ```

* Optionally you could output the result to tome file

```sh
npm start > output.txt
```
