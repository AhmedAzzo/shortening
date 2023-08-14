# Shortening App (FINN)

The **S**hortening App (FINN) is a url shortening project which help you to get short url from original url.

Inside of this repoistory you will find fully app and ready to use **express** based application for **Node.js** runtime. It’s built on **TypeScript** and follows the best **top-ranked** content on Node.js best practices from https://github.com/goldbergyoni/nodebestpractices repository.

### Main features:

- 🌐 Ready to use for single instance shortener application.
- 🐳 Containerized application
- 🚄 [ExpressJS](http://expressjs.com) framework with [TypeScript](https://www.typescriptlang.org/) on the board
- ♻️ Live reload
- 🏇 minified and optimized code for production build
- ✏️ Linting via [ESLint](https://eslint.org) with Airbnb configuration
- 🚑 Code Formatter with [Prettier](https://prettier.io)
- 📘 VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript.
- 🚧 Jest for unit testing.
- 🏄 And many more...

### Additional features:

The `master` branch contains the latest version of the app.
However i added more docs about the problem we are solving, the solution we implemented and how we can do more enhancements to have more scallable application, see them in "solution-docs" Folder.

## Getting started

Install `Docker` and `Docker Compose` which are used to maximise the convenience of development on local machine.

When both are installed, build the shfinn image as follow:

```sh
docker-compose build
```

Run the app:

```sh
docker-compose up
```

Go to:

```
 http://localhost:3000
```

If you see the following response in the browser:

```
OK: The application is up and running, Go to API Document.
```

It means that everything work as expected. You may start to use the app.
Please scroll down to "How to work with the app" section.

## Getting started, standard way (no containerization)

If you want to run the app "standard way" using the `npm` instead of `docker-compose`.
You are free to do it just keep in mind that I develop the project on node version 16.
Note: you need to set env variables defined in `.env` file.
On mac OS you can use `export $(cat .env)` to export all env variables from the .env file.

Install dependencies:

```
npm install
```

Run server in dev mode:

```
npm run server:dev
```

## How to work with the app

There are few rules that you have to obey to enjoy the app fully.

1. Enviromment variables - define your envs in `.env` file and provide validation rules for them inside `@config/config.ts` file.
2. Solution structured by components, each component to do fully task.
3. Routing Defined inside `api.ts` fiile.
4. Api described inside `swagger.json` file.

## Testing

The Jest test suites are run by executing

```sh
npm test
```

To run tests directly inside of the shfinn container:

```sh
docker-compose run web npm run test
```

## Code linting

Run code quality analysis using

```sh
npm run lint
```

or insde of the container

```sh
docker-compose run web npm run lint
```

## Fixing problems

Automatically fix linter's problems

```sh
npm run lint:fix
```

or insde of the container

```sh
docker-compose run web npm run lint:fix
```

## Logging

```javascript
import logger from '@core/utils/logger';

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5
logger.silly('message'); // level 6
```

In development mode, log messages of all severity levels will be printed to the console.
In production mode, only `info`, `warn`, and `error` logs will be printed to the console.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using [morgan](https://github.com/expressjs/morgan)).

### Switching log-level on runtime

If you use docker to run the app, please connect to the app container and simply execute `npm run loglevel:change` in new terminal. It will increase your current log level, in case you reach the highest level it will back to error level which is 0.
This feature may be useful on production env when you want to switch your app log level to debug without restarting node server.

## Troubleshooting

To help you diagnose problems, a Unique Request ID is added to each incoming request and printed to a log. This allows you to correlate log entries for a given web request across multiple log data sources.

Here are some examples of log entries for a Create User request (/api/user):

```log
2023-08-14 10:35:10 ea293024-2f76-4d10-a78d-5a6fcb8b5307 info END Request Id: ea293024-2f76-4d10-a78d-5a6fcb8b5307
```

## SwaggerUI

An interactive API documentation of NET.ts can be accessed at the path: <baseURL>/docs \
For local development use this: http://localhost:3000/docs \
If your webservice's basePath is different from `"/"` put basePath after `docs` in url address e.g. \
for service placed under `<basePath>` subfolder the correct URL is: `https://<baseURL>/<basePath>/docs/<basePath>` \
Remember to select correct protocol befor you try to call any endpoint, "http" is used only for local development. \
Important: swaggerUI is disabled for the production env.

## Running in production with Docker

For the sake of readability, you may build an image with custom name i.e. **shfinn**, go to the root project (where the Dockerfile is) and execute:

`docker build -t shfinn .`

When done, execute the docker run command to create a container from a shfinn image and starts the container with all the required environment variables:

`docker run --rm -it -p 3000:3000 -e NODE_ENV='production' shfinn`

That's it, you just ran the app in production mode.

## Contributing

All contributions are welcome!

🙌 Thanks
