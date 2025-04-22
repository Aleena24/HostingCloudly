// Home.jsx
import React from "react";
import "./Home.css";
import PricingSection from './PricingSection';
import Testimonials from "./Testimonials";
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHeadset, faShieldAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="top-banner">
        <p>Hosting Cloudly is a product of SenseSys. <a href="#">Learn more</a></p>
      </div>
     

      <header className="navbar">
          <div className="logo">
            <img src="/logoN.png" alt="Hosting Cloudly Logo" className="logo-img" />
          </div>
          <nav>
            <a href="#">Home</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#docs">Docs</a>
          </nav>
          <button className="login-btn">Login</button>
        </header>
     


      <section className="hero">
        <h1>AI-Powered Business Solutions</h1>
        <p>The only automation you'll ever need — powerful, reliable, and easy-to-use solutions that perform the way you need them to.</p>
        <button className="cta-btn">Explore Platform</button>
      </section>

      <section className="feature-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="feature-container">
            <div className="feature-card">
              <img src="/icons/drupal.png" alt="Drupal" />
              <h3>Drupal Hosting</h3>
            </div>
            <div className="feature-card">
              <img src="/icons/joomla.png" alt="Joomla" />
              <h3>Joomla Hosting</h3>
            </div>
            <div className="feature-card">
              <img src="/icons/wordpress.png" alt="WordPress" />
              <h3>WordPress Hosting</h3>
            </div>
            <div className="feature-card">
              <img src="/icons/magento.png" alt="Magento" />
              <h3>Magento Hosting</h3>
            </div>
          </div>
        </div>
      </section>



      <section className="why-choose-section">
        <h1>Why Choose SenseSys?</h1>
        <h3>Experience unmatched performance, support, and reliability with our AI-powered solutions.</h3>
        <div className="why-choose-grid">
          <div className="choose-card">
            <FontAwesomeIcon icon={faBolt} size="2x" style={{ marginBottom: '15px', color: '#2563eb' }} />
            <h4>Blazing Fast Performance</h4>
            <p>Optimized infrastructure to keep your business running lightning fast.</p>
          </div>
          <div className="choose-card">
            <FontAwesomeIcon icon={faHeadset} size="2x" style={{ marginBottom: '15px', color: '#10b981' }} />
            <h4>24/7 Support</h4>
            <p>Our expert team is always ready to help — any time, any day.</p>
          </div>
          <div className="choose-card">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" style={{ marginBottom: '15px', color: '#f59e0b' }} />
            <h4>Top-notch Security</h4>
            <p>Advanced security layers to keep your data safe and sound.</p>
          </div>
        </div>
      </section>

      
      <PricingSection />



      <section className="feature-advanced-section">
        <div className="feature-content">
          <div className="feature-right">
            <h2>Advanced features for the advanced user</h2>
            <p>
              Focus on your business and avoid all the web hosting managed hosting guarantees unmatched performance, 
              reliability and choice with 24/7 support.
            </p>

            <div className="feature-tabs">
              <span className="tab active">Unlimited Features</span>
              <span className="tab">Key Features</span>
              <span className="tab">Email Features</span>
              <span className="tab">Security Features</span>
              <span className="tab">Global Cloud Platform</span>
            </div>

            <ul className="feature-list">
              {[
                'Host Unlimited Domains And Websites',
                'Unlimited 100% SSD Storage',
                'Unlimited Free SSL Certificates',
                'Unlimited Bandwidth',
                'Unlimited Migrations',
                'Unlimited MySQL Databases',
                'Unlimited Subdomains',
                'Unlimited FTP/SFTP Accounts',
                'Unlimited Scheduled Tasks',
              ].map((item, idx) => (
                <li key={idx}>
                  <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pricing-comparison-section">
        <h2 className="pricing-title">We Have Perfect Web Hosting Package for You</h2>
        <p className="pricing-subtitle">Clear pricing backed by our unbeatable 24 Hours Money-Back Guarantee.</p>
        
        <div className="pricing-table">
          <table>
            <thead>
              <tr>
                <th>Plan Features</th>
                <th>Serverbyt<br />₹199/mo</th>
                <th>Godaddy<br />₹499/mo</th>
                <th>Hostinger<br />₹499/mo</th>
                <th>Bluehost<br />₹629/mo</th>
                <th>Hostgator<br />₹1,399/mo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Domains', 'Unlimited', 'Unlimited', '100', 'Unlimited', 'Unlimited'],
                ['SSD Storage', 'Unlimited', 'Unlimited', '200 GB', 'Unlimited', 'Unlimited'],
                ['Memory (RAM)', 'Autoscale', '1 GB', '1536 MB', 'Unlimited', '6 GB'],
                ['vCPU', 'Unlimited', '2 Cores', '2 Cores', 'Unlimited', '6 Cores'],
                ['Bandwidth', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'],
                ['Emails', 'Unlimited', '1', '100', 'Unlimited', 'Unlimited'],
                ['MySQL Databases', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'],
              ].map((row, idx) => (
                <tr key={idx}>
                  {row.map((cell, i) => <td key={i}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
            
      <Testimonials/>     
      <Footer />
    </div>
  );
}

export default Home;