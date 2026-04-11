import { useLanguage } from '../context/LanguageContext';
import './Team.css';

const roleColors = {
  'President':      '#004e9a',
  'Vice President': '#f26b21',
  'Secretary':      '#8b5cf6',
  'Treasurer':      '#10b981',
};

const teamMembers = [
  { id: 1, name: 'Ahmed Ali',     role: 'President',      image: 'https://ui-avatars.com/api/?name=Ahmed+Ali&background=004e9a&color=fff&size=200' },
  { id: 2, name: 'Fatima Hassan', role: 'Vice President', image: 'https://ui-avatars.com/api/?name=Fatima+Hassan&background=f26b21&color=fff&size=200' },
  { id: 3, name: 'Mohamed Nur',   role: 'Secretary',      image: 'https://ui-avatars.com/api/?name=Mohamed+Nur&background=8b5cf6&color=fff&size=200' },
  { id: 4, name: 'Aisha Jama',    role: 'Treasurer',      image: 'https://ui-avatars.com/api/?name=Aisha+Jama&background=10b981&color=fff&size=200' },
];

const Team = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('team_title')}</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="team-grid">
          {teamMembers.map(member => {
            const accent = roleColors[member.role] || '#004e9a';
            return (
              <div key={member.id} className="team-card" style={{ '--accent': accent }}>
                <div className="team-card-top">
                  <div className="team-img-wrap">
                    <img src={member.image} alt={member.name} className="team-img" />
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role-badge">{member.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
