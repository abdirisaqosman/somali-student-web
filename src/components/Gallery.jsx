import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', alt: 'Students collaborating' },
  { id: 2, src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80', alt: 'Community group' },
  { id: 3, src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80', alt: 'Conference event' },
  { id: 4, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80', alt: 'Community networking' },
  { id: 5, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80', alt: 'Meeting' },
  { id: 6, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', alt: 'Teamwork' },
];

const Gallery = () => {
  const { t } = useLanguage();

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
            <div key={photo.id} className="gallery-item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-overlay-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
                <span>{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
