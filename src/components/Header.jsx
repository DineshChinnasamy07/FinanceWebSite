import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { company, navLinks } from '../data/mockData';
import Icon from './Icon';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" onClick={closeMenu}>
          <span className="site-header__mark" aria-hidden="true">
            த
          </span>
          <span className="site-header__brand-text">
            <span className="site-header__name brand-title">{company.name}</span>
            <span className="site-header__tagline">{company.tagline}</span>
          </span>
        </Link>

        <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                isActive ? 'site-header__link is-active' : 'site-header__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link to="/contact" className="btn btn--primary site-header__cta">
            Apply Now
          </Link>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`site-header__drawer ${menuOpen ? 'is-open' : ''}`}
      >
        <nav className="site-header__nav site-header__nav--mobile" aria-label="Mobile">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                isActive ? 'site-header__link is-active' : 'site-header__link'
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary" onClick={closeMenu}>
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
