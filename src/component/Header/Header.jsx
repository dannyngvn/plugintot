import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';

const Header = () => {
  return (
    <div className="container">
      <div className="Header">
        <i className="lnil lnil-menu"></i>
        <Link to="/">
          <img
            className="logo"
            src="https://thamyoganamaste.com/wp-content/uploads/2022/02/logo-png.png"
            alt="logo"
          />
        </Link>

        <i className="lnil lnil-search"></i>
      </div>
    </div>
  );
};

export default Header;
