import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common/button/button';
import './card.scss';

export interface ICardProps {
  title: string;
  price: string | number;
  image?: {
    url?: string;
  };
  path: string;
  handleClick: () => void;
}

export const Card: React.FC<ICardProps> = ({
  title,
  price,
  image,
  path,
  handleClick,
}) => {
  return (
    <>
      <div className="card__container">
        <Link to={`/detail${path}`}>
          <div className="card__thumbnail">
            <img alt="monster" className="card__item" src={image?.url} />
          </div>
        </Link>
        <div className="card__details">
          <Link to={`/detail${path}`}>
            <h2>{title}</h2>
          </Link>
          <p>{price}</p>
          <Button
            className="primary"
            copy="Add to Cart"
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </>
  );
};
