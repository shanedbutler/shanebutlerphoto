import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Interiors from './components/architectural/Interiors';
import PointOfSale from './components/personal/PointOfSale';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { Logout } from './components/admin/Logout';
import { Login } from './components/admin/Login';


const App = () => {
  const [user, setUser] = useState(null);
  
  // Initialize Firebase Auth
  const auth = getAuth();
  
  useEffect(() => {
    // Listen for changes to the user authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  
    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);
  
  const handleLogout = async () => {
    try {
      // Sign out the user
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="container mx-auto max-w-screen-xl sm:px-8 px-3 h-screen">
        <Navbar auth={auth} onLogout={handleLogout} user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/architectural-interiors" element={<Interiors />} />
          <Route path="/point-of-sale" element={<PointOfSale />} />
          <Route path="/login" element={<Login auth={auth} />} />
          {user &&
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
