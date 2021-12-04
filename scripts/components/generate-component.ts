import fs from 'fs';
import { component, story } from './template';
import prompt from 'prompt';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const writeErrorHandler = (error: any) => {
  if (error) throw error;
};

// Fetch the new React component name from argument passed to the script.
const [name] = process.argv.slice(2);

if (!name) throw new Error('Please provide a component name.');

/**
 * Create necessary React component files like
 * Component, SCSS and Storybook stories files.
 */
async function createComponent(): Promise<void> {
  prompt.start();
  const schema = {
    properties: {
      hasInterface: {
        name: 'hasInterface',
        message: 'Does the component has props?',
        validator: /y[es]*|n[o]?/,
        warning: 'You must choose yes(y) or no(n)!',
        default: 'no',
      },
      hasStory: {
        name: 'hasStory',
        message: 'Does the component has Storybook integration?',
        validator: /y[es]*|n[o]?/,
        warning: 'You must choose yes(y) or no(n)!',
        default: 'no',
      },
      isCommon: {
        name: 'isCommon',
        message: 'Will the component be shared?',
        validator: /y[es]*|n[o]?/,
        warning: 'You must choose yes(y) or no(n)!',
        default: 'no',
      },
    },
  };
  await prompt.get(schema, (error, results) => {
    // Set the root of the component based on the result from the prompt.
    let root = 'components';
    if (results.isCommon === 'yes' || results.isCommon === 'y') {
      root = 'common';
    }
    // Create the directory to hold new React component files.
    const directory = `./src/${root}/${name}`;
    if (fs.existsSync(directory))
      throw new Error('A component with that name already exists.');
    fs.mkdirSync(directory);

    // Create the actual .tsx React component file.
    fs.writeFile(
      `${directory}/${name}.tsx`,
      component(
        name,
        results.hasInterface === 'yes' || results.hasInterface === 'y'
          ? 'withInterface'
          : ''
      ),
      writeErrorHandler
    );
    // Create the new component's stylesheet.
    fs.writeFile(`${directory}/${name}.scss`, '', writeErrorHandler);
    if (results.hasStory === 'yes' || results.hasStory === 'y') {
      // Create the new component's Storybook story.
      fs.writeFile(
        `${directory}/${name}.stories.tsx`,
        story(name),
        writeErrorHandler
      );
    }
  });
}

createComponent();
