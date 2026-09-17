import CTASection from '../components/CTASection';
import LoanSchemesSection from '../components/LoanSchemesSection';

function LoanSchemes() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Loan Schemes</h1>
          <p className="page-hero__text">
            Compare sample Gold Loan solutions created for personal, business, and flexible needs.
          </p>
        </div>
      </section>
      <LoanSchemesSection />
      <CTASection />
    </>
  );
}

export default LoanSchemes;
