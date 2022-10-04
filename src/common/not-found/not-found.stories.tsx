import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotFound } from './not-found';

export default {
  title: 'Common/Not Found',
  component: NotFound,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => (
  <NotFound {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
