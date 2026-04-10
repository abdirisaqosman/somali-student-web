import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Team.css';

const Team = () => {
  const { t } = useLanguage();
  
  const teamMembers = [
    { id: 1, name: 'Ahmed Ali', role: 'President', image: 'https://ui-avatars.com/api/?name=Ahmed+Ali&background=004e9a&color=fff&size=200' },
    { id: 2, name: 'Fatima Hassan', role: 'Vice President', image: 'https://ui-avatars.com/api/?name=Fatima+Hassan&background=f26b21&color=fff&size=200' },
    { id: 3, name: 'Mohamed Nur', role: 'Secretary', image: 'https://ui-avatars.com/api/?name=Mohamed+Nur&background=da291c&color=fff&size=200' },
    { id: 4, name: 'Aisha Jama', role: 'Treasurer', image: 'https://ui-avatars.com/api/?name=Aisha+Jama&background=248bf4&color=fff&size=200' },
  ];

  return (
    <section id="team" className="team section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('team_title')}</h2>
          <div className="title-underline mx-auto"></div>
        </div>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card glass-panel">
              <div className="team-img-wrapper">
                <img src={member.image} alt={member.name} className="team-img" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
