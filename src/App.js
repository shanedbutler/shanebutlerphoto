import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/about/About';
import Home from './components/home/Home';
import Interiors from './components/architectural/Interiors';
import { register } from 'swiper/element/bundle';

// Register Swiper custom elements
register();

const App = () => {
  return (
    <Router>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/architectural-interiors" element={<Interiors />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
