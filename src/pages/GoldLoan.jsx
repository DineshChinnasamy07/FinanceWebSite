import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import HowItWorks from '../components/HowItWorks';
import TrustCards from '../components/TrustCards';
import { company } from '../data/mockData';

function GoldLoan() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Gold Loan</h1>
          <p className="page-hero__text">
            Unlock liquidity from eligible gold jewellery with a clear, shop-assisted process
            designed for trust and transparency.
          </p>
          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--primary">
              Apply Now
            </Link>
            <Link to="/#calculator" className="btn btn--ghost">
              Estimate Loan
            </Link>
          </div>
        </div>
      </section>
      <TrustCards />
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">Overview</p>
            <h2 className="section__title">A customer-friendly Gold Loan experience</h2>
            <p className="section__lead">
              {company.name} serves customers from a single shop in Kaveripattinam, Krishnagiri Dt,
              Tamil Nadu.
            </p>
          </div>
          <div className="card-grid card-grid--2">
            <article className="benefit-card">
              <h3>Who it is for</h3>
              <p>
                Customers seeking short-term funds for personal, family, or business needs while
                retaining ownership intent on pledged gold after closure.
              </p>
            </article>
            <article className="benefit-card">
              <h3>What to expect</h3>
              <p>
                Shop evaluation, documentation guidance, transparent charge discussion, and a
                clear path from approval to fund disbursement.
              </p>
            </article>
          </div>
        </div>
      </section>
      <HowItWorks />
      <CTASection />
    </>
  );
}

export default GoldLoan;
