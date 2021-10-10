import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header: React.FC<any> = () => {
  return (
    <header>
      <div className="brand">
        <h1>Imitations.mu</h1>
      </div>
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-list-item">
            <Link to={`/profile`}>Profile</Link>
          </li>
          <li className="navigation-list-item">
            <span className="cart-count">10</span>
            <Link to={`/cart`}>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
