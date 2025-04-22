// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>SenseSys</h3>
          <p>AI-Powered Business Automation Platform</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@sensesys.in</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SenseSys. All rights reserved.</p>
      </div>
    </footer>
  );
}
