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

  return (
    <> 
           { /*TODO: add a home page*/ }
    <header>
      { /*Brand image here*/ }

      <img src="/pictures/b.jpg" alt="Brand Logo"/>
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
              onClick={logout}
            >
              <span> Welcome {name} </span> &nbsp;
              Logout
            </span>
          ) : (
            <>
              <span
                style={{ float: 'right', marginRight: '1em', cursor: 'pointer' }}
                onClick={login}
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
 );
}
export default Header;
