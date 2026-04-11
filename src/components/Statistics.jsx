import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  PieChart, Pie, Sector, ResponsiveContainer, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList,
} from 'recharts';
import './Statistics.css';

// ── Count-up animation hook ───────────────────────────────
const useCountUp = (target, duration, shouldStart) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, shouldStart]);
  return count;
};

// ── Custom chart tooltip ──────────────────────────────────
const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  const name = item.payload?.name ?? item.name;
  return (
    <div className="stat-tooltip">
      {name && <p className="tooltip-label">{name}</p>}
      <p className="tooltip-value"><strong>{item.value}</strong></p>
    </div>
  );
};

// ── Animated stat card ────────────────────────────────────
const StatCard = ({ labelText, value, suffix, icon, animated }) => {
  const count = useCountUp(value, 2000, animated);
  return (
    <div className="stat-card">
      <div className="stat-icon-wrap">{icon}</div>
      <div className="stat-value">{count.toLocaleString()}{suffix}</div>
      <div className="stat-label">{labelText}</div>
    </div>
  );
};

// ── Main component ────────────────────────────────────────
const Statistics = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── Stat cards ────────────────────────────────────────
  const stats = [
    {
      id: 1, labelKey: 'stats_students', value: 850, suffix: '+',
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
      id: 2, labelKey: 'stats_graduates', value: 320, suffix: '+',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 2 9 2 12 0v-5"/>
        </svg>
      ),
    },
    {
      id: 3, labelKey: 'stats_events', value: 45, suffix: '',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
    },
    {
      id: 4, labelKey: 'stats_universities', value: 12, suffix: '',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
    },
  ];

  // ── Chart data ────────────────────────────────────────
  const genderData = [
    { name: t('label_male'), value: 520 },
    { name: t('label_female'), value: 330 },
  ];

  const degreeData = [
    { name: t('label_bachelor'), students: 600 },
    { name: t('label_master'), students: 180 },
    { name: t('label_phd'), students: 70 },
  ];

  const facultyData = [
    { name: t('label_engineering'), students: 280 },
    { name: t('label_medicine'), students: 165 },
    { name: t('label_administration'), students: 150 },
    { name: t('label_law'), students: 95 },
    { name: t('label_science'), students: 100 },
    { name: t('label_other'), students: 60 },
  ];

  const universityData = [
    { name: 'Hacettepe Üniversitesi', students: 180 },
    { name: 'Gazi Üniversitesi', students: 145 },
    { name: 'Ankara Üniversitesi', students: 130 },
    { name: 'OSTİM Teknik', students: 110 },
    { name: 'Bilkent Üniversitesi', students: 85 },
    { name: t('label_other'), students: 200 },
  ];

  // ── Colors ────────────────────────────────────────────
  const PIE_COLORS = ['#248bf4', '#f26b21'];

  const DEGREE_COLORS = [
    ['#248bf4', '#004e9a'],
    ['#f26b21', '#c4530f'],
    ['#da291c', '#8b1610'],
  ];

  const FACULTY_COLORS = [
    '#3b82f6', // Engineering – blue
    '#10b981', // Medicine – emerald
    '#f59e0b', // Administration – amber
    '#8b5cf6', // Law – purple
    '#06b6d4', // Science – cyan
    '#94a3b8', // Other – slate
  ];

  const UNI_COLORS = [
    '#248bf4', '#2e96f5', '#38a0f6',
    '#42aaf7', '#4cb4f8', '#56bef9',
  ];

  // ── Pie label ─────────────────────────────────────────
  const pieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const r = innerRadius + (outerRadius - innerRadius) * 0.5;
    return (
      <text
        x={cx + r * Math.cos(-midAngle * RADIAN)}
        y={cy + r * Math.sin(-midAngle * RADIAN)}
        fill="white" textAnchor="middle" dominantBaseline="central"
        fontSize={14} fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // ── Shared axis styles ────────────────────────────────
  const axisTickStyle = { fill: 'rgba(255,255,255,0.65)', fontSize: 12 };

  return (
    <section ref={sectionRef} className="statistics section-padding">
      <div className="stats-bg-orb stats-bg-orb--1" aria-hidden="true" />
      <div className="stats-bg-orb stats-bg-orb--2" aria-hidden="true" />

      <div className="container stats-inner">
        <div className="section-header">
          <h2 className="section-title stats-section-title">{t('stats_title')}</h2>
          <div className="title-underline mx-auto stats-underline" />
        </div>

        {/* ── Stat cards ── */}
        <div className="stats-container">
          {stats.map(stat => (
            <StatCard
              key={stat.id}
              labelText={t(stat.labelKey)}
              value={stat.value}
              suffix={stat.suffix}
              icon={stat.icon}
              animated={animated}
            />
          ))}
        </div>

        {/* ── Charts 2×2 grid ── */}
        <div className="charts-container">

          {/* 1 — Gender donut */}
          <div className="chart-box">
            <h3 className="chart-title">{t('stats_gender_dist')}</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%" cy="50%"
                    innerRadius={70} outerRadius={110}
                    paddingAngle={4} dataKey="value"
                    label={pieLabel} labelLine={false}
                    animationBegin={200} animationDuration={900}
                    shape={(props) => (
                      <Sector {...props} fill={PIE_COLORS[props.index]} stroke="none" />
                    )}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    iconType="circle" iconSize={10}
                    formatter={(v) => (
                      <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>{v}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 2 — Degree bar */}
          <div className="chart-box">
            <h3 className="chart-title">{t('stats_degree_dist')}</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={degreeData} margin={{ top: 30, right: 20, left: 0, bottom: 5 }}>
                  <defs>
                    {DEGREE_COLORS.map(([from, to], i) => (
                      <linearGradient key={i} id={`degGrad${i}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={from} />
                        <stop offset="100%" stopColor={to} />
                      </linearGradient>
                    ))}
                  </defs>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.07)" />
                  <XAxis dataKey="name" stroke="transparent" tick={axisTickStyle} tickLine={false} />
                  <YAxis stroke="transparent" tick={{ ...axisTickStyle, fill: 'rgba(255,255,255,0.4)' }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} content={<CustomTooltip />} />
                  <Bar dataKey="students" maxBarSize={80} animationDuration={900}
                    shape={({ x, y, width, height, index }) =>
                      height > 0 ? <rect x={x} y={y} width={width} height={height} fill={`url(#degGrad${index})`} rx="8" ry="8" /> : null
                    }
                  >
                    <LabelList dataKey="students" position="top" fill="rgba(255,255,255,0.85)" fontSize={14} fontWeight="bold" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 3 — Faculty horizontal bar */}
          <div className="chart-box">
            <h3 className="chart-title">{t('stats_faculty_dist')}</h3>
            <div className="chart-wrapper chart-wrapper--tall">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={facultyData}
                  margin={{ top: 5, right: 50, left: 0, bottom: 5 }}
                  barCategoryGap="25%"
                >
                  <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.07)" />
                  <XAxis type="number" stroke="transparent" tick={{ ...axisTickStyle, fill: 'rgba(255,255,255,0.4)' }} tickLine={false} axisLine={false} />
                  <YAxis type="category" dataKey="name" width={110} stroke="transparent" tick={axisTickStyle} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} content={<CustomTooltip />} />
                  <Bar dataKey="students" maxBarSize={22} animationDuration={900}
                    shape={({ x, y, width, height, index }) =>
                      width > 0 ? <rect x={x} y={y} width={width} height={height} fill={FACULTY_COLORS[index]} rx="5" ry="5" /> : null
                    }
                  >
                    <LabelList dataKey="students" position="right" fill="rgba(255,255,255,0.7)" fontSize={12} fontWeight="600" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 4 — Universities horizontal bar */}
          <div className="chart-box">
            <h3 className="chart-title">{t('stats_university_dist')}</h3>
            <div className="chart-wrapper chart-wrapper--tall">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={universityData}
                  margin={{ top: 5, right: 50, left: 0, bottom: 5 }}
                  barCategoryGap="25%"
                >
                  <defs>
                    <linearGradient id="uniGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#248bf4" />
                      <stop offset="100%" stopColor="#004e9a" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.07)" />
                  <XAxis type="number" stroke="transparent" tick={{ ...axisTickStyle, fill: 'rgba(255,255,255,0.4)' }} tickLine={false} axisLine={false} />
                  <YAxis type="category" dataKey="name" width={140} stroke="transparent" tick={axisTickStyle} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} content={<CustomTooltip />} />
                  <Bar dataKey="students" maxBarSize={22} animationDuration={900}
                    shape={({ x, y, width, height, index }) =>
                      width > 0 ? <rect x={x} y={y} width={width} height={height} fill={UNI_COLORS[index % UNI_COLORS.length]} rx="5" ry="5" /> : null
                    }
                  >
                    <LabelList dataKey="students" position="right" fill="rgba(255,255,255,0.7)" fontSize={12} fontWeight="600" />
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
