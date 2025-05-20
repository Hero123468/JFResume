import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import Ecom from './pages/Ecom/Ecom'
import Feature from './pages/Feature/Feature'
import Resume from './pages/Resume/Resume'

export default function App() {
  return (
    <div>

      <nav style={{ padding: '1em', background: '#eee'}}>
        <Link to="/" style={{ marginRight: 'irem' }}>Home </Link>
        <Link to="/Ecom" style={{ marginRight: 'irem' }}>Ecom </Link>
        <Link to="/Feature" style={{ marginRight: 'lrem' }}>Feature </Link>
        <Link to="/Resume">Resume</Link>
      </nav>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<Home />} /> 
        <Route path="/Ecom" element={< Ecom />} />
        <Route path="/Feature" element={< Feature />} />
        <Route path="/Resume" element={< Resume/>} />
        {/* Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" />} /> 

      </Routes>
    </div>

  )
}