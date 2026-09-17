import { howItWorksSteps } from '../data/mockData';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <section className="section section--alt" id="how-it-works">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Process</p>
          <h2 className="section__title">How Gold Loan Works</h2>
          <p className="section__lead">
            A clear four-step journey from shop visit to receiving funds.
          </p>
        </div>

        <ol className="process-timeline">
          {howItWorksSteps.map((item) => (
            <li key={item.step} className="process-step">
              <span className="process-step__number">Step {item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
