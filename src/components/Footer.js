import React, { useState } from "react";
import "../style/Footer.css"

import {ReactComponent as InstagramIcon} from '../assets/instagram-svgrepo-com.svg'
import {ReactComponent as FacebookIcon} from '../assets/facebook-svgrepo-com.svg'

const Footer = ({className}) => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(`News letter subscription received for ${email}`);
    alert(`success! You have subscribed to Reclubbing news`);

    setTimeout(() => {
      setEmail('');
    }, 500);

  }

  return (
    <footer className={`footer-section ${className}`} id="contact">
      <div className="footer-newsletter">
        <h3> Subscribe for news</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value) }
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-social">
        <h3>Follow us</h3>
        <div className="social-icons">

          <a href="https://www.instagram.com/re.clubbing/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <InstagramIcon className="svg-icon" width="40px" height="40px" />
          </a>

          <a href="https://www.facebook.com/re.clubbing/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FacebookIcon className="svg-icon" width="40px" height="40px" />
          </a>

        </div>
      </div>

      <div className="footer-contact">
        <p>&copy; {new Date().getFullYear()}Reclubbing Events</p>
        <p>Contact: info@reclubbing.com</p>
      </div>
    </footer>
  );
};

export default Footer
