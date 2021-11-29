import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardList } from './card-list';

export default {
  title: 'Custom/Card List',
  component: CardList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => (
  <CardList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
