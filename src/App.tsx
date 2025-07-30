import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Ecom from './pages/Ecom/Ecom';
import Feature from './pages/Feature/Feature';
import Resume from './pages/Resume/Resume';
import Login from './pages/Login/Login';
import Navbar from './Components/src/components/Navbar';
import Footer from './Footer/footer';
import Link from 'react-router-dom';

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
  <Link to="/">Home</Link> |{""}  
  <Link to="/Ecom">Ecom</Link> |{""} 
  <Link to="/Feature">Feature</Link> |{""} 
  <Link to="/Resume">Resume</Link>  |{""}
     </nav>

      <Footer />
    </div>
  );
}