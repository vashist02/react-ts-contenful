import React from "react";
import { ICard } from '../../Interfaces/card.interface';
import "./card.css";

const Card: React.FC<ICard> = ({ title, price, itemImage }) => {
  return (
    <div className="card-container">
      <div className="card-thumbnail">
        <img alt="monster" className="items" src={itemImage?.url} />
      </div>
      <div className="card-details">
        <h2>{title}</h2>
        <p>{price}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
