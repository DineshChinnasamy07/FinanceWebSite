import './TestimonialCard.css';

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <p className="testimonial-card__quote">“{testimonial.quote}”</p>
      <p className="testimonial-card__author">
        - {testimonial.name}, {testimonial.location}
      </p>
      <p className="testimonial-card__note">Sample / demo testimonial</p>
    </article>
  );
}

export default TestimonialCard;
