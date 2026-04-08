import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CanalPage from './pages/CanalPage';
import CampusPage from './pages/CampusPage';
import InterviewsPage from './pages/InterviewsPage';
import TeamPage from './pages/TeamPage';
import MapAnalysisPage from './pages/MapAnalysisPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CanalPage />} />
            <Route path="/campus" element={<CampusPage />} />
            <Route path="/interviews" element={<InterviewsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/map-analysis" element={<MapAnalysisPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
