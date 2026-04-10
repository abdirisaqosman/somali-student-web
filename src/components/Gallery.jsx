import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';

const Gallery = () => {
  const { t } = useLanguage();
  
  // Using high quality Unsplash photos representing students, events, and community
  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', alt: 'Students collaborating' },
    { id: 2, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80', alt: 'Community group' },
    { id: 3, src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80', alt: 'Conference event' },
    { id: 4, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80', alt: 'Community networking' },
    { id: 5, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', alt: 'Meeting' },
    { id: 6, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', alt: 'Teamwork' }
  ];

  return (
    <section id="gallery" className="gallery section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('gallery_title')}</h2>
          <div className="title-underline mx-auto"></div>
          <p className="gallery-desc">{t('gallery_desc')}</p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="gallery-item glass-panel">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>ASSA Event</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
