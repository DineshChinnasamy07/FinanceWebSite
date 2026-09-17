import { Link } from 'react-router-dom';
import { company, contactInfo, shop } from '../data/mockData';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <h2 className="site-footer__name brand-title">{company.name}</h2>
          <p className="site-footer__tagline">{company.tagline}</p>
          <p className="site-footer__note">
            Single shop Gold Loan service at {shop.address}.
          </p>
          <p className="site-footer__note">
            Contact: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a>
          </p>
        </div>

        <div>
          <h3 className="site-footer__heading">Company</h3>
          <ul className="site-footer__list">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/shop">Our Shop</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="site-footer__heading">Gold Loan</h3>
          <ul className="site-footer__list">
            <li><Link to="/gold-loan">Gold Loan</Link></li>
            <li><Link to="/loan-schemes">Loan Schemes</Link></li>
            <li><Link to="/#calculator">Gold Loan Calculator</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="site-footer__heading">Customer Support</h3>
          <ul className="site-footer__list">
            <li><Link to="/faq">Help Centre</Link></li>
            <li><Link to="/contact">Contact Support</Link></li>
            <li><a href={`tel:${contactInfo.phone}`}>Call {contactInfo.phoneDisplay}</a></li>
            <li><Link to="/shop">Shop Location</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="site-footer__heading">Legal</h3>
          <ul className="site-footer__list">
            <li><Link to="/about">Privacy Policy</Link></li>
            <li><Link to="/about">Terms &amp; Conditions</Link></li>
            <li><Link to="/about">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {company.copyrightYear} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
