import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/nav/Navbar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Interiors } from './components/architectural/Interiors';
import { PointOfSale } from './components/personal/PointOfSale';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { Login } from './components/admin/Login';
import { Options } from './components/admin/Options';

export const App = () => {
  const [user, setUser] = useState(null);
  const [userResolved, setUserResolved] = useState(false);

  // Initialize Firebase Auth
  const auth = getAuth();

  useEffect(() => {
    // Listen for changes to the user authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setUserResolved(true);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  if (!userResolved) {
    return null;
  }

  return (
    <Router>
      <div className="container mx-auto max-w-screen-xl sm:px-8 px-3 h-screen">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/architectural-interiors" element={<Interiors />} />
          <Route path="/point-of-sale" element={<PointOfSale />} />
          {user ?
            <Route path="/admin" element={<Options auth={auth} />} />
            :
            <Route path="/admin" element={<Login auth={auth} />} />
          }
        </Routes>
      </div>
    </Router>
  );
}
