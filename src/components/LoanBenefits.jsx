import { loanBenefits } from '../data/mockData';
import './LoanBenefits.css';

function LoanBenefits() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Benefits</p>
          <h2 className="section__title">Simple Gold Loan. Clear Benefits.</h2>
          <p className="section__lead">
            Highlighting the customer experience themes of this fictional practice brand.
          </p>
        </div>
        <div className="benefits-grid">
          {loanBenefits.map((item) => (
            <article key={item.id} className="benefit-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LoanBenefits;
