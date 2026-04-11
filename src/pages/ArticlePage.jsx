import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import articles from '../data/articles';
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>Article not found.</h2>
        <Link to="/opinions" className="btn btn-primary">← Back to Opinions</Link>
      </div>
    );
  }

  const others = articles.filter(a => a.id !== article.id);

  return (
    <div className="article-page">

      {/* ── Hero ── */}
      <div className="article-hero" style={{ backgroundImage: `url(${article.image})` }}>
        <div className="article-hero-overlay" />
        <div className="container article-hero-content">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <span className="article-category-badge">{article.category}</span>
          <h1 className="article-hero-title">{article.title}</h1>
          <p className="article-hero-date">{article.date}</p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="container article-layout">
        <article className="article-body-card">
          <p className="article-lead">{article.excerpt}</p>
          <div className="article-divider" />
          {article.body.map((para, i) => (
            <p key={i} className="article-para">{para}</p>
          ))}
        </article>

        {/* ── More articles ── */}
        {others.length > 0 && (
          <aside className="article-more">
            <h3 className="more-title">More Articles</h3>
            <div className="more-list">
              {others.map(other => (
                <Link key={other.id} to={`/opinions/${other.id}`} className="more-card">
                  <div
                    className="more-card-img"
                    style={{ backgroundImage: `url(${other.image})` }}
                  />
                  <div className="more-card-info">
                    <span className="more-card-category">{other.category}</span>
                    <h4 className="more-card-title">{other.title}</h4>
                    <span className="more-card-date">{other.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>

    </div>
  );
};

export default ArticlePage;
