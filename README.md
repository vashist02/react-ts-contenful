# React with Contentful in TypeScript

This project is created to test out the integration of React with Contentful CMS written in TypeScript.
It uses an e-shopping application as example.

## Tech Stack

- React
- TypeScript
- Contentful CMS
- Redux (To be Added)

## Installation Steps

Make sure before installing the application that you have at least Node `v14.17.0` installed locally.

To install the app simply run the following steps assuming you are using SSH to clone:

```
$ git clone git@github.com:vashist02/react-ts-contenful.git
$ cd react-ts-contentful
$ npm install
```

## Running Locally

To run the application locally, it is the same as running any React application. Simply run the following command to spin up the local server:

```
$ npm run start
```

## React Component Scaffolding

You can scaffold React components using a script that has been added to the project.

The following command can be used to automatically generate a boilerplate React component.

**Note**: This command needs to be executed from the **root** of the project.

```
$ npm run generate:component <component-name>
```

3 types of prompts would be displayed which all of them accept "yes(y) / no(n)" as answers.

- Does the component has props? (If yes, an interface will be automatically added).
- Does the component has Storybook integration? (If yes, a `.stories.tsx` file will be added with basic Storybook templating.)
- Will the component be shared? (If yes, the component will reside in the `common` directory instead of the `components` directory.)

## Contributors

The application is written and maintained by the 2 following geeks:

- Vashist Chamun (Repository Owner)
- Divesh Heeramun (Repository Maintainer)
