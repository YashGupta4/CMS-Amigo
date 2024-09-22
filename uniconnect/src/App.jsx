import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import PageRenderer from './pages/PageRenderer';
import LoginPage from './pages/login-page.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ForgotCredentialsPage from './pages/ForgotCredentialsPage.jsx';
import { getCurrentUser, logout } from './api/auth';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('AboutUs');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [isGuestMode, setIsGuestMode] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log('No token found, skipping /me call');
          setLoading(false);
          return;
        }
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsGuestMode(false);
    setActivePage('AboutUs');
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      setIsGuestMode(false);
      setActivePage('AboutUs');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleContinueAsGuest = () => {
    setIsGuestMode(true);
    setActivePage('AboutUs');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <Navbar 
          setActivePage={setActivePage} 
          user={user} 
          onLogout={handleLogout}
          setShowLogin={() => setActivePage('Login')}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isGuestMode={isGuestMode}
        />
        <main className={`pt-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          <Routes>
            <Route path="/login" element={
              user || isGuestMode ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} onContinueAsGuest={handleContinueAsGuest} />
            } />
            <Route path="/forgot-credentials" element={<ForgotCredentialsPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/" element={
              user || isGuestMode ? (
                activePage === 'AboutUs' ? <AboutUs /> : <PageRenderer activePage={activePage} user={user} isGuestMode={isGuestMode} />
              ) : (
                <Navigate to="/login" />
              )
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}