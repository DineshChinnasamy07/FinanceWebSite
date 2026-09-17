import { whyChooseUs } from '../data/mockData';
import Icon from './Icon';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Trust</p>
          <h2 className="section__title">Why Choose <span className="brand-title">தரணிgoldes</span>?</h2>
          <p className="section__lead">
            Built around clarity, careful gold handling, and friendly service at our Kaveripattinam shop.
          </p>
        </div>
        <div className="why-grid">
          {whyChooseUs.map((item) => (
            <article key={item.id} className="why-card">
              <span className="why-card__icon">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
