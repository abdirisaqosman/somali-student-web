import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bg-orb footer-bg-orb--1" aria-hidden="true" />
      <div className="footer-bg-orb footer-bg-orb--2" aria-hidden="true" />

      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src="/logo.jpg" alt="ASSA Logo" className="footer-logo" />
          </div>
          <h3 className="footer-brand-name">ASSA</h3>
          <p className="footer-tagline">{t('footer_tagline')}</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook" className="social-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp" className="social-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">{t('footer_quick_links')}</h4>
          <ul className="footer-links">
            <li><Link to="/">{t('nav_home')}</Link></li>
            <li><Link to="/about">{t('nav_about')}</Link></li>
            <li><Link to="/statistics">{t('nav_stats')}</Link></li>
            <li><Link to="/achievers">{t('nav_achievers')}</Link></li>
            <li><Link to="/team">{t('nav_team')}</Link></li>
            <li><Link to="/gallery">{t('nav_gallery')}</Link></li>
            <li><Link to="/opinions">{t('nav_opinions')}</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-col">
          <h4 className="footer-col-title">{t('footer_connect')}</h4>
          <div className="footer-contact-items">
            <div className="footer-contact-item">
              <span className="contact-icon">✉</span>
              <span>info@assa.org.tr</span>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">📍</span>
              <span>{t('footer_location')}</span>
            </div>
          </div>
          <Link to="/join" className="footer-join-btn">{t('hero_cta')}</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} ASSA</span>
          <span className="footer-dot">·</span>
          <span>{t('footer_rights')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
