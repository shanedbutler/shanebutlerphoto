import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about/about';
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
