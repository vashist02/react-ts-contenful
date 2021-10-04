import React from "react";
import { Icard } from "../../Interfaces/interface";
import "./card.css";

const Card: React.FC<Icard> = ({ title, price, itemImage }) => {
  return (
    <div className="card-container">
      <img alt="monster" className="items" src={itemImage?.url} />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Card;
