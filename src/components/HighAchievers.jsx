import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './HighAchievers.css';

const HighAchievers = () => {
  const { t } = useLanguage();
  
  const achievers = [
    { 
      id: 1, 
      name: 'Khadija Osman', 
      major: 'Medicine', 
      achievement: '1st Place in National Medical Symposium & Valedictorian', 
      image: 'https://ui-avatars.com/api/?name=Khadija+Osman&background=004e9a&color=fff&size=150' 
    },
    { 
      id: 2, 
      name: 'Hassan Abdi', 
      major: 'Engineering', 
      achievement: 'Top Graduating Engineering Student of 2025', 
      image: 'https://ui-avatars.com/api/?name=Hassan+Abdi&background=004e9a&color=fff&size=150' 
    },
    { 
      id: 3, 
      name: 'Leyla Hussein', 
      major: 'Architecture', 
      achievement: 'Winner of the Ankara Urban Innovation Design Award', 
      image: 'https://ui-avatars.com/api/?name=Leyla+Hussein&background=004e9a&color=fff&size=150' 
    }
  ];

  return (
    <section id="achievers" className="achievers section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('achievers_title')}</h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <div className="achievers-list">
          {achievers.map(student => (
            <div key={student.id} className="achiever-card glass-panel">
               <img src={student.image} alt={student.name} className="achiever-img" />
               <div className="achiever-info">
                 <h3 className="achiever-name">{student.name}</h3>
                 <p className="achiever-major">{student.major}</p>
                 <div className="achiever-highlight">
                   <span className="trophy-icon">🏆</span>
                   <p className="achievement-text">{student.achievement}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighAchievers;
