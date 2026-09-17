import { shop } from '../data/mockData';
import './ShopLocation.css';

function ShopLocation() {
  return (
    <section className="section" id="shop">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Our Shop</p>
          <h2 className="section__title">Visit <span className="brand-title">தரணிgoldes</span></h2>
          <p className="section__lead">
            We operate from one shop only. Come meet us in Kaveripattinam, Krishnagiri District.
          </p>
        </div>

        <article className="shop-card">
          <div className="shop-card__main">
            <h3 className="brand-title">{shop.name}</h3>
            <p className="shop-card__name brand-title">{shop.shopName}</p>
            <p className="shop-card__meta">{shop.address}</p>
            <p className="shop-card__status">{shop.status}</p>
            <p className="shop-card__hours">{shop.hours}</p>
            <p className="shop-card__phone">
              Contact:{' '}
              <a href={`tel:${shop.phone}`}>{shop.phoneDisplay}</a>
            </p>
          </div>
          <div className="shop-card__actions">
            <a href={`tel:${shop.phone}`} className="btn btn--primary">
              Call Now
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(shop.address)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn--secondary"
            >
              Get Directions
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ShopLocation;
