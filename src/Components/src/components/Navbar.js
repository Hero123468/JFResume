import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
function Navbar() {
    return (_jsxs("nav", { style: {
            background: 'transl',
            color: 'black',
            padding: '2px',
            justifyContent: 'space-between',
            width: "100%",
            display: "flex"
        }, children: [_jsx("div", { style: { fontWeight: 'bold' } }), _jsxs("div", { children: [_jsx(Link, { to: "/ecom", style: { marginRight: '15px', color: 'black' }, children: "Ecom" }), _jsx(Link, { to: "/feature", style: { marginRight: '15px', color: 'black' }, children: "Feature" }), _jsx(Link, { to: "/resume", style: { marginRight: '15px', color: 'black' }, children: "Resume" }), _jsx(Link, { to: "/login", style: { color: 'black' }, children: "Login" })] })] }));
}
export default Navbar;
