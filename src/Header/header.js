import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const name = "User";
    function login() {
        setIsLoggedIn(true);
    }
    function logout() {
        setIsLoggedIn(false);
    }
    return (_jsx(_Fragment, { children: _jsxs("header", { children: [_jsx("img", { src: "/pictures/b.jpg", alt: "Brand Logo" }), _jsxs("nav", { style: {}, children: [_jsx(Link, { to: "/", style: { marginRight: 'irem' }, children: "Home " }), _jsx(Link, { to: "/Ecom", style: { marginRight: 'irem' }, children: "Ecom " }), _jsx(Link, { to: "/feature", style: { marginRight: 'lrem' }, children: "Feature " }), _jsx(Link, { to: "/Resume", children: "Resume" })] }), _jsx("div", { className: "loging", children: isLoggedIn ? (_jsxs("span", { style: { float: 'right', marginRight: '1em', cursor: 'pointer' }, onClick: logout, children: [_jsxs("span", { children: [" Welcome ", name, " "] }), " \u00A0 Logout"] })) : (_jsxs(_Fragment, { children: [_jsx("span", { style: { float: 'right', marginRight: '1em', cursor: 'pointer' }, onClick: login, children: "Login" }), _jsx("span", { style: { float: 'right', marginRight: '1em' }, children: "Register" })] })) })] }) }));
}
export default Header;
