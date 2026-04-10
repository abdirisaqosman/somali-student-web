import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      {/* Background image will be set in CSS or inline if we import it */}
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="glass-panel hero-card">
          <h1 className="hero-title">{t('hero_title')}</h1>
          <p className="hero-subtitle">{t('hero_subtitle')}</p>
          <Link to="/join" className="btn btn-primary hero-btn">{t('hero_cta')}</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
