import { useLanguage } from '../context/LanguageContext';
import './About.css';

const features = [
  {
    title: 'Academic Excellence',
    desc: 'Supporting students to reach their full academic potential',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 2 9 2 12 0v-5"/>
      </svg>
    ),
  },
  {
    title: 'Strong Community',
    desc: 'Building lasting bonds among Somali students across Ankara',
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
    title: 'Cultural Exchange',
    desc: 'Celebrating our heritage while embracing global perspectives',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

const partners = [
  {
    name: 'Embassy of Somalia in Turkey',
    desc: 'The official diplomatic mission of the Federal Republic of Somalia in Ankara, supporting Somali citizens and students abroad.',
    location: 'Ankara, Turkey',
    crest: '/somali_embassy_crest.svg',
  },
  {
    name: 'Somali Student Association in Turkey',
    desc: 'A nationwide federation uniting all Somali student associations across Turkey, promoting solidarity and coordinated advocacy.',
    location: 'Turkey (Nationwide)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <section id="about" className="about section-padding">
        <div className="container about-container">
          <div className="about-text">
            <h2 className="section-title">{t('about_title')}</h2>
            <div className="title-underline"></div>
            <p className="about-desc">{t('about_desc')}</p>

            <div className="about-features">
              {features.map((f) => (
                <div key={f.title} className="about-feature">
                  <div className="feature-icon-wrap">{f.icon}</div>
                  <div>
                    <h4 className="feature-title">{f.title}</h4>
                    <p className="feature-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-box">
              <img src="/hero_bg.png" alt="ASSA community" className="about-img" />
              <div className="visual-img-overlay"></div>
            </div>
            <div className="visual-badge">
              <span className="badge-number">850+</span>
              <span className="badge-label">Students</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Associated Organisations ── */}
      <section className="partners-section">
        <div className="container">
          <div className="partners-header">
            <h2 className="section-title">Associated Organisations</h2>
            <div className="title-underline"></div>
            <p className="partners-desc">
              ASSA works closely with these organisations to support and empower Somali students in Turkey.
            </p>
          </div>

          <div className="partners-grid">
            {partners.map((p) => (
              <div key={p.name} className="partner-card">
                {p.crest ? (
                  <div className="partner-crest-wrap">
                    <img src={p.crest} alt={`${p.name} crest`} className="partner-crest" />
                  </div>
                ) : (
                  <div className="partner-icon-wrap">{p.icon}</div>
                )}
                <div className="partner-info">
                  <h3 className="partner-name">{p.name}</h3>
                  <span className="partner-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {p.location}
                  </span>
                  <p className="partner-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
