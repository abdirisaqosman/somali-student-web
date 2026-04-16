import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const navKeys = [
  { to: '/',           key: 'nav_home' },
  { to: '/about',      key: 'nav_about' },
  { to: '/statistics', key: 'nav_stats' },
  { to: '/achievers',  key: 'nav_achievers' },
  { to: '/team',       key: 'nav_team' },
  { to: '/gallery',    key: 'nav_gallery' },
  { to: '/opinions',   key: 'nav_opinions' },
];

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'tr', label: 'TR' },
  { code: 'so', label: 'SO' },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, language, changeLanguage } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-content">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src="/logo.jpg" alt="ASSA Logo" className="navbar-logo" />
          </Link>
        </div>

        <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          {navKeys.map(({ to, key }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? 'active-link' : ''}
                onClick={closeMenu}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <div className="lang-switcher">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                className={`lang-btn${language === code ? ' lang-active' : ''}`}
                onClick={() => changeLanguage(code)}
                aria-label={`Switch to ${label}`}
              >
                {label}
              </button>
            ))}
          </div>

          <Link to="/join" className="btn btn-primary nav-join-btn" onClick={closeMenu}>
            {t('nav_join')}
          </Link>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
