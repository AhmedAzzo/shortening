# Shortening app Directory Structure

This document provides an overview of the directory structure of the shortening project.

## Project Overview

shortening is a simple URL shortening service where you enter a URL such as https://codesubmit.io/library/react and it returns a short URL such as http://short.est/GeAi9K.

- **`/src`**: Contains all the code and related assets.

## SRC Directory

- **`/src`**: Contains the source code for the all the application.
  - **`/components`**: Contain routes, contollers and services in our application.

    - **`/404`**: Contain Not Found Routes and functionality with test functionality.

    - **`/healthcheck`**: Contain routes, contollers related to check out app status, with test functionality.

    - **`/shortening`**: Contain routes, contollers and services for shortenng service and its functionality, with test functionality.
      - **`/__test__`**: Contain tests for shortening functions.
      - **`/interfaces`**: Contain shortening interfaces.
      - **`/validators`**: Contain shortening validators functions.
      - **`/other files`**: Like cintroller, routes, service.

    - **`/swagger-ui`**: Contain routeswith initialization of our swagger app.
  - **`/config`**: Contain config files and settings used by application.
  - **`/code`**: Contain the Core, common and shared functionality in the app.
  - **`/helpers`**: Contains Functions used by our 

  - **`/api.ts`**: File has route initialization.
  - **`/app.ts`**: File has the main application setup.
  - **`/server.ts`**: File has server settings and configurations. 
  - **`/swagger.json`**: File difine the swagger document for our app. 

- other files in main directory, are used for testing, linting and by git, and manage packages like package.json.
