import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/nav/Navbar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Interiors } from './components/architectural/Interiors';
import { PointOfSale } from './components/personal/PointOfSale';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { useEffect, useState } from 'react';
import { Login } from './components/admin/Login';
import { Options } from './components/admin/Options';

export const App = ({ app }) => {
  const [user, setUser] = useState(null);
  const [userResolved, setUserResolved] = useState(false);
  const [maxWidthClass, setMaxWidthClass] = useState("max-w-screen-xl");

  // Initialize Firebase Auth and Cloud Storage
  const auth = getAuth(app);
  const storage = getStorage(app);

  const handleResize = () => {
    // Update widthClass state based on viewport height
    if (window.innerHeight > 950) {
      setMaxWidthClass("max-w-screen-xl");
    } else {
      setMaxWidthClass("max-w-screen-lg");
    }
  };

  useEffect(() => {
    handleResize();
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
      <div className={`container mx-auto sm:px-8 px-3 h-screen ${maxWidthClass}`}>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home storage={storage} />} />
          <Route path="/about" element={<About />} />
          <Route path="/architectural-interiors" element={<Interiors storage={storage} />} />
          <Route path="/point-of-sale" element={<PointOfSale storage={storage} />} />
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
