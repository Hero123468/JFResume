import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import Ecom from './pages/Ecom/Ecom'
import Feature from './pages/Feature/Feature'
import Resume from './pages/Resume/Resume'
import { useEffect, useState } from 'react';
import Footer from './Footer/footer'
import './App.css'; // Import CSS file for app styling

export default function App() {
  const location = useLocation(); 
  //console.log("reactlocationis ",location)
  //console.log("windowlocationis ",window)
  

  const [url,thingthatchangesurl] = useState("");
 useEffect(() => {
        const handlePopState = () => {
            thingthatchangesurl(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopState);
  function App() {
       return (
         <div className="app-container">
           {/* Your other components/content here */}
           <Footer />
         </div>
       );

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);
 
  // useEffect(
  //   ()=>{
  //     thingthatchangesurl(location.pathname)
  //     console.log(url)
  //   },
  //   [location]
  // )

  return (
    <div>

      <nav style={{ padding: '1em', background: '#eee'}}>
        <Link to="/" style={{ marginRight: 'irem' }}>Home </Link>
        <Link to="/Ecom" style={{ marginRight: 'irem' }}>Ecom </Link>
        <Link to="/feature" style={{ marginRight: 'lrem' }}>Feature </Link>
        <Link to="/Resume">Resume</Link>
      </nav>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<Home />} /> 
        <Route path="/Ecom" element={< Ecom />} />
        <Route path="/feature" element={< Feature />} />
        <Route path="/Resume" element={< Resume/>} />
        {/* Redirect unknown paths */}
      {/* <Route path="*" element={<Navigate to="/" />} />  */}

      </Routes>
    </div>

  )
}