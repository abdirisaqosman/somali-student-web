import { useLanguage } from '../context/LanguageContext';
import './HighAchievers.css';

const rankConfig = [
  { label: '1st', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)' },
  { label: '2nd', color: '#94a3b8', bg: 'rgba(148,163,184,0.1)', border: 'rgba(148,163,184,0.25)' },
  { label: '3rd', color: '#b45309', bg: 'rgba(180,83,9,0.1)',    border: 'rgba(180,83,9,0.25)' },
];

const achievers = [
  {
    id: 1,
    name: 'Khadija Osman',
    major: 'Medicine',
    achievement: '1st Place in National Medical Symposium & Valedictorian',
    image: 'https://ui-avatars.com/api/?name=Khadija+Osman&background=004e9a&color=fff&size=150',
  },
  {
    id: 2,
    name: 'Hassan Abdi',
    major: 'Engineering',
    achievement: 'Top Graduating Engineering Student of 2025',
    image: 'https://ui-avatars.com/api/?name=Hassan+Abdi&background=f26b21&color=fff&size=150',
  },
  {
    id: 3,
    name: 'Leyla Hussein',
    major: 'Architecture',
    achievement: 'Winner of the Ankara Urban Innovation Design Award',
    image: 'https://ui-avatars.com/api/?name=Leyla+Hussein&background=8b5cf6&color=fff&size=150',
  },
];

const HighAchievers = () => {
  const { t } = useLanguage();

  return (
    <section id="achievers" className="achievers section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('achievers_title')}</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="achievers-list">
          {achievers.map((student, i) => {
            const rank = rankConfig[i];
            return (
              <div
                key={student.id}
                className="achiever-card"
                style={{ '--rank-color': rank.color, '--rank-bg': rank.bg, '--rank-border': rank.border }}
              >
                <div className="achiever-rank">
                  <span className="rank-label">{rank.label}</span>
                  <span className="rank-trophy">🏆</span>
                </div>

                <img src={student.image} alt={student.name} className="achiever-img" />

                <div className="achiever-info">
                  <h3 className="achiever-name">{student.name}</h3>
                  <span className="achiever-major-badge">{student.major}</span>
                  <div className="achiever-highlight">
                    <p className="achievement-text">{student.achievement}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighAchievers;
