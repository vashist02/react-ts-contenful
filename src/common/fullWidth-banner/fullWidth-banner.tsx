import React from 'react';
import './fullWidth-banner.scss';

export interface IFullWidthBannerProps {
  title: string;
}

export const FullWidthBanner: React.FC<IFullWidthBannerProps> = ({
  title,
}: IFullWidthBannerProps) => {
  return <div>Hello 👋, I am a fullWidth-banner component.</div>;
};
