import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Ecom from './pages/Ecom/Ecom';
import Feature from './pages/Feature/Feature';
import Resume from './pages/Resume/Resume';
import Login from './pages/Login/Login';
import Navbar from './Components/src/components/Navbar';
import Footer from './Footer/footer';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ecom" element={<Ecom />} />
          <Route path="/Feature" element={<Feature />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
      
      <nav>
  <a href="/JFResume/">Home</a> | 
  <a href="/JFResume/ecom">Ecom</a> | 
  <a href="/JFResume/feature">Feature</a> | 
  <a href="/JFResume/resume">Resume</a>
     </nav>

      <Footer />
    </div>
  );
}