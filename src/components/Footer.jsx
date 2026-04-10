import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src="/logo.jpg" alt="ASSA Logo" className="footer-logo" />
          <p>Ankara Somali Students' Association</p>
        </div>
        
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><i className="icon-facebook"></i> F</a>
          <a href="#" aria-label="Twitter"><i className="icon-twitter"></i> X</a>
          <a href="#" aria-label="Instagram"><i className="icon-instagram"></i> IG</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {year} ASSA. {t('footer_rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
