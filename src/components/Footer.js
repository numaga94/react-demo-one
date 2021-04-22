import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

const data = {
  subscribeHeading: 'Join our newsletter to receive our latest news',
  subscribeText: 'You can unsubscribe at any time.',
};

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">{data.subscribeHeading}</p>
        <p className="footer-subscription-text">{data.subscribeText}</p>
        <div className="input-areas">
          <form>
            <input className="footer-input" name="email" type="email" placeholder="Your Email" />
            <Button buttonStyle="btn--outline" buttonSize="btn--medium">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      {/* <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/react-demo-one">Testimonials</Link>
            <Link to="/react-demo-one">Careers</Link>
            <Link to="/react-demo-one">Investors</Link>
            <Link to="/react-demo-one">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/react-demo-one">Contact</Link>
            <Link to="/react-demo-one">Support</Link>
            <Link to="/react-demo-one">Destinations</Link>
            <Link to="/react-demo-one">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/react-demo-one">Submit Video</Link>
            <Link to="/react-demo-one">Ambassadors</Link>
            <Link to="/react-demo-one">Agency</Link>
            <Link to="/react-demo-one">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/react-demo-one">Instagram</Link>
            <Link to="/react-demo-one">Facebook</Link>
            <Link to="/react-demo-one">Youtube</Link>
            <Link to="/react-demo-one">Twitter</Link>
          </div>
        </div>
      </div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/react-demo-one" className="social-logo">
              ARTI
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">
            ARTI © {new Date().getFullYear()} Created By <a href="https://numaga.fr">NUMAGA</a>
          </small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to="/react-demo-one" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="social-icon-link instagram" to="/react-demo-one" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </Link>
            <Link className="social-icon-link youtube" to="/react-demo-one" target="_blank" aria-label="Youtube">
              <i className="fab fa-youtube" />
            </Link>
            <Link className="social-icon-link twitter" to="/react-demo-one" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </Link>
            <Link className="social-icon-link twitter" to="/react-demo-one" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
