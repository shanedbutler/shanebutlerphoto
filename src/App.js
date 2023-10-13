import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/nav/Navbar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Login } from './auth/Login';
import { Options } from './components/admin/Options';
import { UpdatePassword } from './auth/UpdatePassword';
import { Gallery } from './components/gallery/Gallery';

export const App = ({ supabase }) => {
  const [session, setSession] = useState(null)
  const [sessionResolved, setSessionResolved] = useState(false);

  const [maxWidthClass, setMaxWidthClass] = useState("max-w-screen-xl");

  const handleResize = () => {
    // Update widthClass state based on viewport height
    if (window.innerHeight > 950) {
      setMaxWidthClass("max-w-screen-xl");
    } else {
      setMaxWidthClass("max-w-screen-lg");
    }
  };

  /**
   * If the user is redirected back to the application from the password reset
   * ask the user to reset their password.
   */
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event == "PASSWORD_RECOVERY") {
        return (
          <UpdatePassword supabase={supabase} />
        );
      }
    })
  }, [supabase])

  useEffect(() => {
    handleResize();

    // Listen for changes to the user authentication state
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => {
      if (authListener && typeof authListener.unsubscribe === 'function') {
        authListener.unsubscribe();
      }
    };
  }, [supabase.auth]);

  if (!sessionResolved) {
    return null;
  }


  return (
    <Router>
      <div className={`container mx-auto sm:px-8 px-3 h-screen ${maxWidthClass}`}>
        <Navbar session={session} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/architectural-interiors" element={<Gallery storagePath="architectural" />} />
          <Route path="/point-of-sale" element={<Gallery storagePath="personal" />} />
          <Route path="/update-password" element={<UpdatePassword supabase={supabase} />} />
          {session ?
            <Route path="/admin" element={<Options supabase={supabase} session={session} />} />
            :
            <Route path="/admin" element={<Login supabase={supabase} />} />
          }
        </Routes>
      </div>
    </Router>
  );
}
