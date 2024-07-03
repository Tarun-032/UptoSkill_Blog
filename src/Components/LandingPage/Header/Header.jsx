import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import Logo from '../../../assets/Logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo"> <img src={Logo} alt="logo" /></div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/community">Community</Link>
        <Link to="/login">
          <button className="signup-button">Sign Up</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
