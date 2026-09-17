import CTASection from '../components/CTASection';
import CustomerJourney from '../components/CustomerJourney';
import HowItWorks from '../components/HowItWorks';

function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">How It Works</h1>
          <p className="page-hero__text">
            Follow the four-step Gold Loan process and the full customer journey from apply to funds.
          </p>
        </div>
      </section>
      <HowItWorks />
      <CustomerJourney />
      <CTASection />
    </>
  );
}

export default HowItWorksPage;
