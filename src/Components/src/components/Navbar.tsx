import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            background: 'transl',
            color: 'black',
            padding: '2px',
            justifyContent: 'space-between',
            width: "100%",
            display: "flex" 
            
        }}>
            <div style={{fontWeight: 'bold'}}></div>
            <div>
                <Link to="/ecom" style={{ marginRight: '15px', color: 'black' }}>Ecom</Link>
                <Link to="/feature" style={{ marginRight: '15px', color: 'black' }}>Feature</Link>
                <Link to="/resume" style={{ marginRight: '15px', color: 'black' }}>Resume</Link>
                <Link to="/login" style={{ color: 'black' }}>Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;