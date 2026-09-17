import { loanSchemes } from '../data/mockData';
import LoanSchemeCard from './LoanSchemeCard';

function LoanSchemesSection() {
  return (
    <section className="section section--alt" id="schemes">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Loan Schemes</p>
          <h2 className="section__title">Gold Loan Solutions for Your Needs</h2>
          <p className="section__lead">
            Explore sample scheme options created for this practice website.
          </p>
        </div>
        <div className="card-grid card-grid--3">
          {loanSchemes.map((scheme) => (
            <LoanSchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LoanSchemesSection;
