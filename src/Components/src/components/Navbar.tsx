import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
    background: '#f8f9fa', // light gray
    color: '#212529',
    padding: '0.75rem 1rem',
    justifyContent: 'space-between',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',       
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