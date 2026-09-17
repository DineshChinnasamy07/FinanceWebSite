import ShopLocation from '../components/ShopLocation';
import CTASection from '../components/CTASection';

function Shop() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Our Shop</h1>
          <p className="page-hero__text">
            தரணிgoldes operates from a single shop in Kaveripattinam, Krishnagiri Dt, Tamil Nadu.
          </p>
        </div>
      </section>
      <ShopLocation />
      <CTASection />
    </>
  );
}

export default Shop;
