import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TStore } from '../../store';
import logo from '../../assets/logo.png';
import './header.scss';

export const Header: React.FC = () => {
  const { items } = useSelector((state: TStore) => state.cartReducer);
  return (
    <header>
      <div className="header__brand">
        <Link to={'/'}>
          <img className="header__logo" src={logo} alt="imitation-logo" />
        </Link>
      </div>
      <nav className="header__navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="navigation__item">
            <Link to={`/shop`}>Shop</Link>
          </li>
          <li className="navigation__item">
            <Link to={`/promotion`}>Promotion</Link>
          </li>
          <li className="navigation__item">
            <Link to={`/blog`}>Blog</Link>
          </li>
          <li className="navigation__item">
            <Link to={`/contact`}>Contact</Link>
          </li>
          <li className="navigation__item cart">
            <span className="cart__count">{items.length}</span>
            <Link to={`/cart`}>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
