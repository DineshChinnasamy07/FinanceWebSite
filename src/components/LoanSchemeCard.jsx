import { Link } from 'react-router-dom';
import Icon from './Icon';
import './LoanSchemeCard.css';

function LoanSchemeCard({ scheme }) {
  return (
    <article className="scheme-card">
      <span className="scheme-card__icon">
        <Icon name={scheme.icon} />
      </span>
      <h3>{scheme.name}</h3>
      <p className="scheme-card__desc">{scheme.shortDescription}</p>
      <p className="scheme-card__label">Useful for</p>
      <ul>
        {scheme.forItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="scheme-card__label">Key benefits</p>
      <ul>
        {scheme.benefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link to="/loan-schemes" className="btn btn--secondary">
        Know More
      </Link>
    </article>
  );
}

export default LoanSchemeCard;
