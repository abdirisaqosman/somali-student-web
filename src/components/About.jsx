import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about section-padding">
      <div className="container about-container">
        <div className="about-text">
          <h2 className="section-title">{t('about_title')}</h2>
          <div className="title-underline"></div>
          <p className="about-desc">{t('about_desc')}</p>
        </div>
        <div className="about-visual">
          <div className="glass-panel visual-box">
             {/* Using CSS gradient to simulate a premium aesthetic element */}
             <div className="visual-inner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
