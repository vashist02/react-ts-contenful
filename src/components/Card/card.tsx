import React from "react";
import { ICard } from '../../Interfaces/card.interface';
import "./card.css";

const Card: React.FC<ICard> = ({ title, price, itemImage }) => {
  return (
    <div className="card-container">
      <img alt="monster" className="items" src={itemImage?.url} />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Card;
