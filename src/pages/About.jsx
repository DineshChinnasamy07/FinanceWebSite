import { company, shop } from '../data/mockData';
import CTASection from '../components/CTASection';
import WhyChooseUs from '../components/WhyChooseUs';

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">About Us</h1>
          <p className="page-hero__text">
            {company.name} is a local Gold Loan shop serving customers from Kaveripattinam,
            Krishnagiri District.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="section__eyebrow">Our Story</p>
            <h2 className="section__title">Local trust. Clear communication.</h2>
            <p className="section__lead">
              We operate from one shop only — no multiple branches. Visit us at {shop.address}.
            </p>
          </div>
          <div className="card-grid card-grid--2">
            <article className="benefit-card">
              <h3>Our Shop</h3>
              <p>
                {shop.address}
                <br />
                Contact: {shop.phoneDisplay}
              </p>
            </article>
            <article className="benefit-card">
              <h3>Our Focus</h3>
              <p>
                Simple Gold Loan guidance, careful gold handling, and transparent discussion of
                charges for every customer.
              </p>
            </article>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CTASection />
    </>
  );
}

export default About;
