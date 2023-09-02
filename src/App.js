import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Interiors from './components/architectural/Interiors';
import PointOfSale from './components/personal/PointOfSale';

const App = () => {
  return (
    <Router>
        <div className="container mx-auto max-w-screen-xl sm:px-8 px-3 h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/architectural-interiors" element={<Interiors />} />
            <Route path="/point-of-sale" element={<PointOfSale />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
