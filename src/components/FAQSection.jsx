import { faqs } from '../data/mockData';
import FAQAccordion from './FAQAccordion';

function FAQSection() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">FAQs</p>
          <h2 className="section__title">Frequently Asked Questions</h2>
          <p className="section__lead">
            Quick answers to common gold loan questions for this practice website.
          </p>
        </div>
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}

export default FAQSection;
