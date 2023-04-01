# DCOMMERCE Assessment

Backend REST API on Node.js v18.13.0 + Hapi.js  +  Hapi Pal + PostgresSql.

## Quick Start to run locally

## Clone Repo

## Run npm install

## Setup PostgreSql.


## Create .env file

    Create .env file in project folder
    Enter these lines:

    PORT=4000
    NODE_ENV=
    DB_USER=
    DB_PASSWORD=
    DB_HOST=
    DB_NAME=
    DB_PORT=

## Start App
    npm start for production
    npm run dev - development
## Project Structure

```
Template/
├── lib/
│   ├── routes/
|   |── services/
│   ├── .hc.js
│   └── index.js
├── node_modules/
├── server/
│   ├── .env-keep
│   ├── index.js
│   └── manifest.js
├── test/
│   └── index.js
├── .eslintrc.json
├── .gitignore
├── .npmignore
├── package-lock.json
├── package.json
└── README.md
```

## API Documentation

To view the list of available APIs and their specifications, visit `https://documenter.getpostman.com/view/17159517/2s93RUvXiz` in your browser.


## Validation

Request data is validated using [Joi](https://joi.dev/).
The validation schemas are defined in the `/validations` directory and are used in the routes by providing them as parameters to the `validate` middleware.

## Test
  npm run test
