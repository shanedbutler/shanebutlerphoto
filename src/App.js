import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Interiors from './components/architectural/Interiors';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

const App = () => {
  return (
    <Router>
        <div className="container mx-auto px-4 h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/architectural-interiors" element={<Interiors />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
