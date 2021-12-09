import React from 'react';
import './full-width-banner.scss';

export interface IFullWidthBannerProps {
  title: string;
  description: string;
  image: string;
  ctaTitle: string;
  imageAlt: string;
}

export const FullWidthBanner: React.FC<IFullWidthBannerProps> = ({
  title,
  description,
  image,
  ctaTitle,
  imageAlt,
}: IFullWidthBannerProps) => {
  return (
    <div className="banner__wrapper">
      <div className="banner__description">
        <h1>{title}</h1>
        <p>{description}</p>
        <button>{ctaTitle}</button>
      </div>
      <div className="banner__image-wrapper">
        <img className="banner__image-image" src={image} alt={imageAlt} />
      </div>
    </div>
  );
};
