import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Ecom from './pages/Ecom/Ecom';
import Feature from './pages/Feature/Feature';
import Resume from './pages/Resume/Resume';
import { useEffect, useState } from 'react';
import Footer from './Footer/footer';
import Header from './Header/header';
import './App.css'; // Import CSS file for app styling
export default function App() {
    //const location = useLocation(); 
    //console.log("reactlocationis ",location)
    //console.log("windowlocationis ",window)
    const [url, thingthatchangesurl] = useState("");
    useEffect(() => {
        const handlePopState = () => {
            thingthatchangesurl(window.location.pathname);
        };
        console.log("url is", url);
        window.addEventListener('popstate', handlePopState);
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
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/Ecom", element: _jsx(Ecom, {}) }), _jsx(Route, { path: "/feature", element: _jsx(Feature, {}) }), _jsx(Route, { path: "/Resume", element: _jsx(Resume, {}) })] }), _jsx(Footer, {})] }));
}
