import React from 'react';
import { ICard } from '../../interfaces/card.interface';
import { Link } from 'react-router-dom';
import './card.css';

const cartsItems: string[] = [];

const addToCart = (id: string) => {
  cartsItems.push(id);
  console.log('Card Debug', `Added to Cart with id ${id} CLICKED`);
  console.log('Card Debug Items', cartsItems);
};

export const Card: React.FC<ICard> = ({
  sys,
  title,
  price,
  itemImage,
  path,
}) => {
  return (
    <div className="card-container">
      <Link to={`/detail${path}`}>
        <div className="card-thumbnail">
          <img alt="monster" className="items" src={itemImage?.url} />
        </div>
      </Link>
      <div className="card-details">
        <Link to={`/detail${path}`}>
          <h2>{title}</h2>
        </Link>
        <p>{price}</p>
        <button className="btn" onClick={() => addToCart(sys.id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
