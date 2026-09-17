import { trustPoints } from '../data/mockData';
import Icon from './Icon';
import './TrustCards.css';

function TrustCards() {
  return (
    <section className="trust-cards">
      <div className="container trust-cards__grid">
        {trustPoints.map((item) => (
          <article key={item.id} className="trust-card">
            <span className="trust-card__icon">
              <Icon name={item.icon} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TrustCards;
