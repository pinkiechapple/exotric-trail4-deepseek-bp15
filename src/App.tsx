import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import RoyalRajasthanTour from './pages/RoyalRajasthanTour';
import GoldenTriangleTour from './pages/GoldenTriangleTour';
import HimalayanTour from './pages/HimalayanTour';
import SouthIndiaTour from './pages/SouthIndiaTour';
import Destinations from './pages/Destinations';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/royal-rajasthan" element={<RoyalRajasthanTour />} />
            <Route path="/tours/golden-triangle" element={<GoldenTriangleTour />} />
            <Route path="/tours/himalayan-kingdoms" element={<HimalayanTour />} />
            <Route path="/tours/south-india" element={<SouthIndiaTour />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
