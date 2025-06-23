
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import GetSuggestionsPage from './pages/GetSuggestionsPage';
import ExplorePage from './pages/ExplorePage';
import MyTripsPage from './pages/MyTripsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isLandingPage = location.pathname === '/';

  // Determine if header and footer should be shown
  // No header/footer on auth pages for a cleaner auth flow
  // Special footer for landing page
  const showHeader = !isAuthPage && !isLandingPage;
  const showFooter = !isAuthPage;


  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {showHeader && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/get-suggestions" element={<GetSuggestionsPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route 
            path="/my-trips" 
            element={
              <ProtectedRoute>
                <MyTripsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      {showFooter && <Footer isLandingPage={isLandingPage && !isAuthPage} />}
    </div>
  );
}


const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
