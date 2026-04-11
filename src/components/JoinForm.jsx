import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './JoinForm.css';

const benefits = [
  {
    title: 'Connect with 850+ Students',
    desc: 'Build relationships with fellow Somali students across Ankara.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Exclusive Events & Activities',
    desc: 'Access cultural celebrations, networking nights, and academic seminars.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Academic & Career Support',
    desc: 'Get guidance, mentoring, and resources from senior students and alumni.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 2 9 2 12 0v-5"/>
      </svg>
    ),
  },
  {
    title: 'Celebrate Your Heritage',
    desc: 'Stay connected to Somali culture and traditions while studying abroad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

const JoinForm = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="join-section section-padding">
      <div className="container">
        <div className="join-wrapper">

          {/* ── Info panel ── */}
          <div className="join-info-panel">
            <div className="join-info-orb" aria-hidden="true" />
            <h2 className="join-info-title">Why Join ASSA?</h2>
            <p className="join-info-desc">
              Become part of a family of students committed to growth, excellence, and unity.
            </p>
            <ul className="join-benefits">
              {benefits.map((b) => (
                <li key={b.title} className="join-benefit">
                  <div className="benefit-icon">{b.icon}</div>
                  <div>
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Form panel ── */}
          <div className="join-form-panel">
            <div className="join-header">
              <h2 className="section-title">{t('join_title')}</h2>
              <div className="title-underline"></div>
              <p className="join-desc">{t('join_desc')}</p>
            </div>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Application Submitted!</h3>
                <p>We will get back to you soon. Welcome to the ASSA family!</p>
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
                    <option value="">-- Select --</option>
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
      </div>
    </section>
  );
};

export default JoinForm;
