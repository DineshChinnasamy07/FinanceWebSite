import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';

function FAQ() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">FAQs</h1>
          <p className="page-hero__text">
            Expand the questions below to learn more about the sample Gold Loan journey.
          </p>
        </div>
      </section>
      <FAQSection />
      <CTASection />
    </>
  );
}

export default FAQ;
