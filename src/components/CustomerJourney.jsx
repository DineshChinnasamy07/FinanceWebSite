import { customerJourney } from '../data/mockData';
import './CustomerJourney.css';

function CustomerJourney() {
  return (
    <section className="section section--alt" id="journey">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Customer Journey</p>
          <h2 className="section__title">From Application to Funds</h2>
          <p className="section__lead">
            A simple path designed to keep every stage easy to understand.
          </p>
        </div>

        <ol className="journey">
          {customerJourney.map((step, index) => (
            <li key={step} className="journey__item">
              <span className="journey__index">{index + 1}</span>
              <span className="journey__label">{step}</span>
              {index < customerJourney.length - 1 ? (
                <span className="journey__arrow" aria-hidden="true">
                  ↓
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default CustomerJourney;
