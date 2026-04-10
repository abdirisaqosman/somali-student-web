import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './JoinForm.css';

const JoinForm = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Usually you'd send this data to a server here.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <section className="join-section section-padding">
      <div className="container join-container">
        <div className="join-header">
          <h2 className="section-title">{t('join_title')}</h2>
          <div className="title-underline mx-auto"></div>
          <p className="join-desc">{t('join_desc')}</p>
        </div>

        <div className="glass-panel form-card">
          {submitted ? (
            <div className="success-message">
              <h3>🎉 Application Submitted Successfully!</h3>
              <p>We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="join-form">
              <div className="form-group">
                <label htmlFor="name">{t('form_name')}</label>
                <input type="text" id="name" required placeholder="John Doe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{t('form_email')}</label>
                <input type="email" id="email" required placeholder="john@university.edu" />
              </div>
              
              <div className="form-group">
                <label htmlFor="university">{t('form_university')}</label>
                <input type="text" id="university" required placeholder="Gazi University" />
              </div>
              
              <div className="form-group">
                <label htmlFor="degree">{t('form_degree')}</label>
                <select id="degree" required>
                  <option value="">-- Select Degree --</option>
                  <option value="bachelor">{t('label_bachelor')}</option>
                  <option value="master">{t('label_master')}</option>
                  <option value="phd">{t('label_phd')}</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                {t('form_submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
