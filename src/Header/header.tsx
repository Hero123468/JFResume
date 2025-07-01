import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
// import picture from 'A.jpg'

function Header() {
  // Mock login state
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const name="Jesse"
  function login (){

  }
  return (
    <> 
           { /*TODO: add a home page*/ }
    <header>
      { /*Brand image here*/ }

      <img src="/pictures/A.jpg" alt="Brand Logo"/>
    <nav style={{}}>
        <Link to="/" style={{ marginRight: 'irem' }}>Home </Link>
        <Link to="/Ecom" style={{ marginRight: 'irem' }}>Ecom </Link>
        <Link to="/feature" style={{ marginRight: 'lrem' }}>Feature </Link>
        <Link to="/Resume">Resume</Link>
    </nav>
      <div className="loging" >
        { /*Mock login/logout toggle*/ }
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
