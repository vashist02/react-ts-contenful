import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="header__brand">
        <h1>Imitations.mu</h1>
      </div>
      <nav className="header__navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to={`/profile`}>Profile</Link>
          </li>
          <li className="navigation__item cart">
            <span className="cart__count">10</span>
            <Link to={`/cart`}>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
