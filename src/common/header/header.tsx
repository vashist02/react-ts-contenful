import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TStore } from '../../store';
import logo from '../../assets/logo.png';
import './header.scss';

export const Header: React.FC = () => {
  const { items } = useSelector((state: TStore) => state.cartReducer);

  const [isClicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked(!isClicked);
  };
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
        </ul>
      </nav>

      <div className="header__cart">
        <span className="cart__count">{items.length}</span>
        <Link to={`/cart`}>
          <i className="fas fa-shopping-cart icon__cart"></i>
        </Link>
      </div>

      <nav
        className={`header__mobile-navigation ${
          isClicked
            ? 'header__mobile-navigation--active'
            : 'header__mobile-navigation--not-active'
        }`}
      >
        <ul className="navigation__list" onClick={toggleClicked}>
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
        </ul>
      </nav>

      <div className="header__navigation--mobile" onClick={toggleClicked}>
        <i
          className={
            isClicked ? 'fas fa-times icon__close' : 'fas fa-bars icon__burger'
          }
        ></i>
      </div>
    </header>
  );
};
