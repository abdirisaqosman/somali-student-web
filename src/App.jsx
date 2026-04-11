import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Route-level code splitting keeps the initial bundle smaller.
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const StatisticsPage = lazy(() => import('./pages/StatisticsPage'));
const AchieversPage = lazy(() => import('./pages/AchieversPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const JoinPage = lazy(() => import('./pages/JoinPage'));
const OpinionsPage = lazy(() => import('./pages/OpinionsPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />

        <main>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="/achievers" element={<AchieversPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/join" element={<JoinPage />} />
              <Route path="/opinions" element={<OpinionsPage />} />
              <Route path="/opinions/:id" element={<ArticlePage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
