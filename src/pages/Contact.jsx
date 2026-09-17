import { useState } from 'react';
import { contactInfo, shop } from '../data/mockData';
import CTASection from '../components/CTASection';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Contact</h1>
          <p className="page-hero__text">
            Call us or request a callback. Visit our single shop in Kaveripattinam.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div>
            <div className="section__head">
              <p className="section__eyebrow">Get in touch</p>
              <h2 className="section__title">Request a Callback</h2>
              <p className="section__lead">
                Share your details and we will show a confirmation on this page.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="field">
                <span>Full Name</span>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>
              <label className="field">
                <span>Phone</span>
                <input
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Mobile number"
                />
              </label>
              <label className="field">
                <span>City</span>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Your city"
                />
              </label>
              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                />
              </label>
              <button type="submit" className="btn btn--primary">
                Submit Request
              </button>
              {submitted ? (
                <p className="contact-form__success">
                  Thank you, {form.name || 'customer'}. Please also call {contactInfo.phoneDisplay} if urgent.
                </p>
              ) : null}
            </form>
          </div>

          <aside className="contact-aside">
            <h3><span className="brand-title">தரணிgoldes</span> Shop</h3>
            <p>{shop.address}</p>
            <p>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a>
            </p>
            <p>{contactInfo.hours}</p>
            <p className="demo-note">{contactInfo.note}</p>
          </aside>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export default Contact;
