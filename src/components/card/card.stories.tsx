import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './card';

export default {
  title: 'Custom/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  sys: {
    id: '12345',
  },
  title: 'Keyboard',
  price: '300.00',
  itemImage: {
    url: 'https://images.ctfassets.net/76jj62xpt2d9/6OShw3L9dyNHBEJyNJmScC/41fd7b5622ce1b299e60ad1ddcb36a3f/keyboard.png',
  },
  path: '/keyboard',
};
