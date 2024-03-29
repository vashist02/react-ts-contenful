import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import banner from '../../assets/banner.png';

import { FullWidthBanner } from './full-width-banner';

export default {
  title: 'Common/Full Width Banner',
  component: FullWidthBanner,
} as ComponentMeta<typeof FullWidthBanner>;

const Template: ComponentStory<typeof FullWidthBanner> = (args) => (
  <FullWidthBanner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Produits Imitations En Promotion',
  description:
    'Prend zot ban produits ki casser. Zis tout produits casser mais li ena chance marcher. We are better than Weshare..',
  image: banner,
  ctaTitle: 'See Products',
  imageAlt: 'imitation-banner',
};
