import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis
} from 'recharts';
import './Statistics.css';

const Statistics = () => {
  const { t, language } = useLanguage();
  
  const stats = [
    { id: 1, label: 'stats_students', value: 850, suffix: '+' },
    { id: 2, label: 'stats_graduates', value: 320, suffix: '+' },
    { id: 3, label: 'stats_events', value: 45, suffix: '' }
  ];

  const genderData = [
    { name: t('label_male'), value: 520 },
    { name: t('label_female'), value: 330 },
  ];

  const degreeData = [
    { name: t('label_bachelor'), students: 600 },
    { name: t('label_master'), students: 180 },
    { name: t('label_phd'), students: 70 },
  ];

  const COLORS = ['#004e9a', '#f26b21', '#da291c', '#248bf4'];

  return (
    <section className="statistics section-padding">
      <div className="container">
        <div className="section-header" style={{color: 'white'}}>
          <h2 className="section-title" style={{color: 'white'}}>{t('stats_title')}</h2>
          <div className="title-underline mx-auto" style={{backgroundColor: 'white'}}></div>
        </div>

        <div className="stats-container">
          {stats.map(stat => (
            <div key={stat.id} className="stat-card glass-panel">
              <h3 className="stat-value">{stat.value}{stat.suffix}</h3>
              <p className="stat-label">{t(stat.label)}</p>
            </div>
          ))}
        </div>

        <div className="charts-container">
          <div className="chart-box glass-panel">
            <h3 className="chart-title">{t('stats_gender_dist')}</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-box glass-panel">
            <h3 className="chart-title">{t('stats_degree_dist')}</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={degreeData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#fff" tick={{fill: '#e2e8f0'}} />
                  <YAxis stroke="#fff" tick={{fill: '#e2e8f0'}} />
                  <Tooltip contentStyle={{backgroundColor: '#1f2937', color: '#fff', border: 'none', borderRadius: '8px'}}/>
                  <Bar dataKey="students" fill="#248bf4" radius={[4, 4, 0, 0]}>
                    {degreeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
