import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">YOUR LOGO</div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#community">Community</a>
        <button className="signup-button">Sign Up</button>
      </nav>
    </header>
  );
}

export default Header;
