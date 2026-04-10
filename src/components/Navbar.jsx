import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { t, language, changeLanguage } = useLanguage();
  const location = useLocation();

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-content">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src="/logo.jpg" alt="ASSA Logo" className="navbar-logo" />
          </Link>
        </div>
        
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>
              {t('nav_home')}
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>
              {t('nav_about')}
            </Link>
          </li>
          <li>
            <Link to="/statistics" className={location.pathname === '/statistics' ? 'active-link' : ''}>
              {t('nav_stats')}
            </Link>
          </li>
          <li>
            <Link to="/achievers" className={location.pathname === '/achievers' ? 'active-link' : ''}>
              {t('nav_achievers')}
            </Link>
          </li>
          <li>
            <Link to="/team" className={location.pathname === '/team' ? 'active-link' : ''}>
              {t('nav_team')}
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active-link' : ''}>
              {t('nav_gallery')}
            </Link>
          </li>
          <li>
            <Link to="/opinions" className={location.pathname === '/opinions' ? 'active-link' : ''}>
              {t('nav_opinions')}
            </Link>
          </li>
        </ul>

        <div className="lang-switcher">
          <select 
            value={language} 
            onChange={(e) => changeLanguage(e.target.value)}
            className="lang-select"
          >
            <option value="so">Soomaali</option>
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
