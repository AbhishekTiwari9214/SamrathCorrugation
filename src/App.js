import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactUsPage from './pages/ContactUsPage';
import Home from './pages/Home';
import TypesBox from './pages/TypesBox';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/admin/LoginPage.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import ReviewPage from './pages/admin/ReviewPage.jsx';
import NonConverted from './pages/admin/NonConverted.jsx';
import Converted from './pages/admin/Converted.jsx';
function App() {
  return (
    <div className="App">
         <Navbar />
         <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/types" element={<TypesBox />} />
        <Route path="/admin" element={<LoginPage/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/review" element={<ReviewPage/>} />
        <Route path="/admin/notConverted" element={<NonConverted/>} />
        <Route path="/admin/converted" element={<Converted/>} />
      </Routes>
    </Router>
         <Footer />
    </div>
  );
}

export default App;
