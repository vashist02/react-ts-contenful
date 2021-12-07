import React from 'react';
import './fullWidth-banner.scss';
import banner from '../../assets/banner.png';

export interface IFullWidthBannerProps {
  title: string;
  description: string;
  image: string;
  ctaTitle: string;
}

export const FullWidthBanner: React.FC<IFullWidthBannerProps> = ({
  title,
  description,
  image,
  ctaTitle,
}: IFullWidthBannerProps) => {
  return (
    <div className="banner__wrapper">
      <div className="wrapper__description">
        <h1>{title}</h1>
        <span>{description}</span>
        <button>{ctaTitle}</button>
      </div>
      <div className="wrapper__image">
        <img
          className="wrapper__banner-image"
          src={image}
          alt="imitation-banner"
        />
      </div>
    </div>
  );
};
