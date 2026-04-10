import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import StatisticsPage from './pages/StatisticsPage';
import AchieversPage from './pages/AchieversPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import JoinPage from './pages/JoinPage';
import OpinionsPage from './pages/OpinionsPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/achievers" element={<AchieversPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/opinions" element={<OpinionsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
