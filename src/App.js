import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from './auth/Login';
import { UpdatePassword } from './auth/UpdatePassword';
import { Navbar } from './components/nav/Navbar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Options } from './components/admin/Options';
import { Gallery } from './components/gallery/Gallery';

export const App = ({ supabase }) => {
  const [session, setSession] = useState(null)

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
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => {
      if (authListener && typeof authListener.unsubscribe === 'function') {
        authListener.unsubscribe();
      }
    };
  }, [supabase.auth]);

  return (
    <Router>
      <div className={`container mx-auto sm:px-8 px-3 h-screen ${maxWidthClass}`}>
        <Navbar session={session} />
        <Routes>
          <Route path="/" element={<Home supabase={supabase} />} />
          <Route path="/about" element={<About />} />
          <Route path="/architectural-interiors" element={<Gallery supabase={supabase} storagePath="architectural" />} />
          <Route path="/point-of-sale" element={<Gallery supabase={supabase} storagePath="personal" />} />
          <Route path="/admin/update-password" element={<UpdatePassword supabase={supabase} />} />
          {session ?
            <Route path="/admin" element={<Options supabase={supabase} session={session} />} />
            :
            <Route path="/admin" element={<Login auth={supabase.auth} />} />
          }
        </Routes>
      </div>
    </Router>
  );
}
