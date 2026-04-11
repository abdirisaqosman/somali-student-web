import { Link } from 'react-router-dom';
import articles from '../data/articles';
import './Opinions.css';

const ArticleCard = ({ article, featured = false }) => (
  <Link
    to={`/opinions/${article.id}`}
    className={`article-card${featured ? ' article-card--featured' : ''}`}
  >
    <div className="article-img-wrapper">
      <img src={article.image} alt={article.title} loading="lazy" />
      <span className="article-category">{article.category}</span>
    </div>
    <div className="article-content">
      <span className="article-date">{article.date}</span>
      <h3 className="article-title">{article.title}</h3>
      <p className="article-excerpt">{article.excerpt}</p>
      <span className="read-more-btn">Read More →</span>
    </div>
  </Link>
);

const Opinions = () => {
  const featured = articles.find(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <section className="articles-section section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Opinions & Perspectives</h2>
          <div className="title-underline mx-auto"></div>
          <p className="articles-desc">Read thoughts, insights, and stories from our vibrant student community.</p>
        </div>

        {featured && <ArticleCard article={featured} featured />}

        <div className="articles-grid">
          {rest.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opinions;
