import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AboutPage from './pages/About/index';
import Footer from './pages/Footer.jsx';
import HomePage from './pages/Home/index';
import Navbar from './pages/Navbar.jsx';
import Preloader from './pages/Pre.jsx';
import ProjectsPage from './pages/Projects/index';
import ResumePage from './pages/Resume/index';
import ScrollToTop from './pages/ScrollToTop';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
