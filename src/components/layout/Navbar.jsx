import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, siteInfo } from '../../data/siteData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (label) => {
    setOpenDropdown(prev => prev === label ? null : label);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Brand */}
        <Link to="/" className="navbar__brand" onClick={closeMobile}>
          <i className="fas fa-school" />
          <span>{siteInfo.name}</span>
        </Link>

        {/* Desktop Nav */}
        <ul className={`navbar__nav${mobileOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label} className={`nav-item${link.dropdown ? ' dropdown' : ''}`}>
              {link.dropdown ? (
                <>
                  <Link
                    to={link.to}
                    className={`nav-link${location.pathname === link.to ? ' active' : ''}`}
                    onClick={(e) => {
                      if (window.innerWidth < 992) {
                        e.preventDefault();
                        toggleDropdown(link.label);
                      } else {
                        closeMobile();
                      }
                    }}
                  >
                    {link.label}
                    <i className="fas fa-chevron-down" />
                  </Link>
                  <div className={`dropdown-menu${openDropdown === link.label ? ' open' : ''}`}>
                    {link.dropdown.map((sub) => (
                      <Link key={sub.label} to={sub.to} onClick={closeMobile}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={link.to}
                  className={`nav-link${location.pathname === link.to ? ' active' : ''}`}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/admissions" className="btn btn-accent btn-pill navbar__cta">
          Admissions Help <i className="fas fa-arrow-right" />
        </Link>

        {/* Hamburger */}
        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
