import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">YOUR LOGO</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#create">Create</a>
        <a href="#contact">Contact</a>
        <a href="#community">Community</a>
        <Link to="/login">
          <button className="signup-button">Sign Up</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
