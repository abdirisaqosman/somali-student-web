import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Articles.css';

const Articles = () => {
  const { t } = useLanguage();
  
  const dummyArticles = [
    {
      id: 1,
      title: 'Welcome Freshers 2026',
      date: 'April 10, 2026',
      excerpt: 'A warm welcome to all the new Somali students joining universities in Ankara this year. Here is everything you need to know to get started.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
      category: 'Announcement'
    },
    {
      id: 2,
      title: 'National Day Celebrations Review',
      date: 'July 2, 2025',
      excerpt: 'Looking back at the incredible celebrations held by ASSA commemorating our National Independence Day right here in the heart of Turkey.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80',
      category: 'Event'
    },
    {
      id: 3,
      title: 'Guide to Academic Success in Ankara',
      date: 'September 15, 2025',
      excerpt: 'Tips from our high achieving students on managing time, studying effectively, and balancing social life while abroad.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
      category: 'Education'
    }
  ];

  return (
    <section className="articles-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('articles_title')}</h2>
          <div className="title-underline mx-auto"></div>
          <p className="articles-desc">{t('articles_desc')}</p>
        </div>

        <div className="articles-grid">
          {dummyArticles.map(article => (
            <article key={article.id} className="article-card glass-panel">
              <div className="article-img-wrapper">
                <img src={article.image} alt={article.title} />
                <span className="article-category">{article.category}</span>
              </div>
              <div className="article-content">
                <span className="article-date">{article.date}</span>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <button className="read-more-btn">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
