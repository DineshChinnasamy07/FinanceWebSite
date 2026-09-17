import { Link } from 'react-router-dom';
import './CTASection.css';

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-section__inner">
        <h2>Need Funds? Your Gold Can Help.</h2>
        <p>Explore a Gold Loan option that fits your financial needs.</p>
        <div className="cta-section__actions">
          <Link to="/contact" className="btn btn--primary">
            Apply Now
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
