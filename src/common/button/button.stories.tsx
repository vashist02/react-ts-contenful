import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'Common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: 'primary',
  copy: `Primary button`,
  onClick: () => {
    alert('Primary button clicked!');
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  className: 'secondary',
  copy: `Secondary button`,
  onClick: () => {
    alert('Secondary button clicked!');
  },
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  className: 'tertiary',
  copy: `Tertiary button`,
  onClick: () => {
    alert('Tertiary button clicked!');
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  copy: `Disabled button`,
  disabled: true,
};
