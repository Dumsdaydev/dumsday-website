import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h3>Dumsday</h3>
          <p>Your guide to smart and stylish tech essentials.</p>
        </div>

        <div className="footer-section links">
          <h4>Contact</h4>
          <ul>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Get in touch</h4>
          <p>dumsday@example.com</p>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaXTwitter />
          </div>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>&copy; 2025 Dumsday. All rights reserved.</p>
        <div>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;