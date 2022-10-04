import React from 'react';
import { ICard } from '../../interfaces/card.interface';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cart';
import { Button } from '../../common/button/button';
import './card.scss';

export const Card: React.FC<ICard> = ({
  sys,
  title,
  price,
  itemImage,
  path,
}) => {
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addToCart({ items: sys.id }));
  };
  return (
    <div className="card__container">
      <Link to={`/detail${path}`}>
        <div className="card__thumbnail">
          <img alt="monster" className="card__item" src={itemImage?.url} />
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
          onClick={() => handleAddCart()}
        />
      </div>
    </div>
  );
};
