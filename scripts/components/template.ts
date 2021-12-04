/**
 * Generate representation for a new React component.
 * @param name The name of the new React component.
 * @param hasProps Holds if the new component will contains props.
 * @returns String representation of the new React component.
 */
const component = (name: string, hasProps: string) => {
  const importReact = `import React from 'react';`.trim();
  const importScss = `import './${name}.scss';`.trim();
  const addInterface = `export interface I${toCamelCase(name)}Props {}`;
  const renderFunctionWithProps = `export const ${toCamelCase(
    name
  )}: React.FC = ({}: I${toCamelCase(name)}Props) => {
    return <div>Hello 👋, I am a ${name} component.</div>;
  };`;
  const renderFunctionNoProps = `export const ${toCamelCase(
    name
  )}: React.FC = () => {
    return <div>Hello 👋, I am a ${name} component.</div>;
  };`;

  const lines = `
  ${importReact}
  ${importScss}

  ${hasProps === 'withInterface' ? addInterface : ''}

  ${
    hasProps === 'withInterface'
      ? renderFunctionWithProps
      : renderFunctionNoProps
  }

  `;

  return lines;
};

/**
 * Generate representation for a new React component's Storybook story.
 * @param name The React component name.
 * @returns String representation of the Storybook template.
 */
const story = (name: string) => {
  const importReact = `import React from 'react';`.trim();
  const importStorybook =
    `import { ComponentStory, ComponentMeta } from '@storybook/react';`.trim();
  const importComponent = `import { ${toCamelCase(name)} } from './${name}';`;
  const exportDefaultStory = `export default {
    title: 'Custom/${name}',
    component: ${toCamelCase(name)}
  } as ComponentMeta<typeof ${toCamelCase(name)}>`;
  const buildTemplate = `const Template: ComponentStory<typeof ${toCamelCase(
    name
  )}> = (args) => (
    <${toCamelCase(name)} {...args} />
    );`;
  const renderPrimary = `export const Primary = Template.bind({});`;

  const lines = `
  ${importReact}
  ${importStorybook}

  ${importComponent}

  ${exportDefaultStory}

  ${buildTemplate}

  ${renderPrimary}
  `;

  return lines;
};

/**
 * Format React component's name to camel case.
 * @param str The name of the component to format to camel case.
 * @returns The formatted camel case component name.
 */
const toCamelCase = (str: string) => {
  return `${str}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
};

export { component, story };
