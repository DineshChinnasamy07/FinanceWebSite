import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-gold.jpg';
import { company } from '../data/mockData';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        <img src={heroImage} alt="" className="hero__image" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <p className="hero__brand brand-title">{company.name}</p>
        <p className="hero__tagline">{company.tagline}</p>
        <h1 className="hero__title">Turn Your Gold Into Opportunity</h1>
        <p className="hero__text">
          Quick, Simple and Secure Gold Loans designed to help you meet your financial needs.
        </p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--primary">
            Apply for Gold Loan
          </Link>
          <a href="#calculator" className="btn btn--ghost">
            Check Loan Eligibility
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
