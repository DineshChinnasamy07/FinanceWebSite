import { testimonials } from '../data/mockData';
import TestimonialCard from './TestimonialCard';

function TestimonialsSection() {
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Testimonials</p>
          <h2 className="section__title">What Our Customers Say</h2>
          <p className="section__lead">
            Fictional quotes for UI practice. Not real customer reviews.
          </p>
        </div>
        <div className="card-grid card-grid--3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
