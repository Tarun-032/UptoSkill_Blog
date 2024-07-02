import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-info">
            <h4>Contact Us</h4>
            <p>Email: contact@blogwebsite.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Blog Street, Blog City, USA</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Blog Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
