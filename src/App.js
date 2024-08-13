import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/admin/LoginPage.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import ReviewPage from './pages/admin/ReviewPage.jsx';
import NonConverted from './pages/admin/NonConverted.jsx';
import Converted from './pages/admin/Converted.jsx';
import Home from './pages/Home';
import ContactUsPage from './pages/ContactUsPage';
import TypesBox from './pages/TypesBox';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/types" element={<TypesBox />} />
            <Route path="/admin" element={<LoginPage />} />
            <Route
              path="/admin/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
            <Route
              path="/admin/review"
              element={<ProtectedRoute element={<ReviewPage />} />}
            />
            <Route
              path="/admin/notConverted"
              element={<ProtectedRoute element={<NonConverted />} />}
            />
            <Route
              path="/admin/converted"
              element={<ProtectedRoute element={<Converted />} />}
            />
          </Routes>
        </Router>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
