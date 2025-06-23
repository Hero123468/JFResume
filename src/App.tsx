import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import Ecom from './pages/Ecom/Ecom'
import Feature from './pages/Feature/Feature'
import Resume from './pages/Resume/Resume'
import { useEffect, useState } from 'react';
import Footer from './Footer/Footer'
import Header from './Header/Header'
import './App.css'; // Import CSS file for app styling

export default function App() {
  //const location = useLocation(); 
  //console.log("reactlocationis ",location)
  //console.log("windowlocationis ",window)
  

  const [url,thingthatchangesurl] = useState("");
 useEffect(() => {
        const handlePopState = () => {
            thingthatchangesurl(window.location.pathname);
        };
        console.log("url is",url) 
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []) ;
 
  // useEffect(
  //   ()=>{
  //     thingthatchangesurl(location.pathname)
  //     console.log(url)
  //   },
  //   [location]
  // )

  return (
    <div>
      <Header/>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<Home />} /> 
        <Route path="/Ecom" element={< Ecom />} />
        <Route path="/feature" element={< Feature />} />
        <Route path="/Resume" element={< Resume/>} />
        
        {/* Redirect unknown paths */}
      {/* <Route path="*" element={<Navigate to="/" />} />  */}
    
      </Routes>
      <Footer/>
    </div>

  )
}