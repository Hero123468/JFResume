/*import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  // Mock login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("Jesse");
  return (
    <> 
           { TODO: add a home page }
    <header>
      { Brand image here }

      <img src="https://via.placeholder.com/150" alt="Brand Logo" style={{ height: '50px', margin: '1em' }} />

      <nav className="navstyle">
        { this is the header ^ should include the brand image (logo) and the login section}
        { <Link to="/Ecom" style={{ marginRight: 'irem' }}>Ecom </Link>
        <Link to="/Feature" style={{ marginRight: 'lrem' }}>Feature </Link> }
        <Link to="/resume-react/Ecom">Ecom </Link>
        <Link to="/resume-react/Feature">Feature </Link>
        <Link to="/resume-react/Resume">Resume</Link>
      </nav>

      <div className="loging" >
        {/* Mock login/logout toggle }
        {isLoggedIn ? (
            <span
              style={{ float: 'right', marginRight: '1em', cursor: 'pointer' }}
              onClick={() => setIsLoggedIn(false)}
            >
              <span> Welcome {name} </span> &nbsp;
              Logout
            </span>
          ) : (
            <>
              <span
                style={{ float: 'right', marginRight: '1em', cursor: 'pointer' }}
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </span>
              <span style={{ float: 'right', marginRight: '1em' }}>
                Register
              </span>
            </>
          )}
      </div>        
    </header>
    </>
    )
}
export default Header;
*/