import { useState } from 'react';
import './FAQAccordion.css';

function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  function toggle(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className="faq-list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq-item__button"
              aria-expanded={isOpen}
              onClick={() => toggle(item.id)}
            >
              <span>{item.question}</span>
              <span className="faq-item__icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen ? <p className="faq-item__answer">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
