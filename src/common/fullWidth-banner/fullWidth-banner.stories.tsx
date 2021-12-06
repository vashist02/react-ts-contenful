
  import React from 'react';
  import { ComponentStory, ComponentMeta } from '@storybook/react';

  import { FullWidthBanner } from './fullWidth-banner';

  export default {
    title: 'Custom/fullWidth-banner',
    component: FullWidthBanner
  } as ComponentMeta<typeof FullWidthBanner>

  const Template: ComponentStory<typeof FullWidthBanner> = (args) => (
    <FullWidthBanner {...args} />
    );

  export const Primary = Template.bind({});
  