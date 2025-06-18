import { useState } from 'react';
import './Header.css';

function Header() {
  // Mock login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const name="Jesse";
  return (
    <> 
           { /*TODO: add a home page*/ }
    <header>
      { /*Brand image here*/ }

      <img src="https://via.placeholder.com/150" alt="Brand Logo" style={{ height: '50px', margin: '1em' }} />

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
