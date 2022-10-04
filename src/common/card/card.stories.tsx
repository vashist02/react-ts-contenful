import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './card';

export default {
  title: 'Common/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Keyboard',
  price: 'Rs 300.00',
  image: {
    url: 'https://geekhack.org/index.php?action=dlattach;topic=99544.0;attach=213443;image',
  },
  path: '/mechanical-keyboard-1',
};
