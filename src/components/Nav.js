import React from "react";
import { Link } from "react-router-dom";


function Nav( {setToken, setIsLoggedIn, isLoggedIn} ) {
  function logout() {
    setToken('');
    setIsLoggedIn(false)
    window.localStorage.removeItem("token");
    
  }


  return(
    <nav>
      <h1>Stranger's Things</h1>
      {isLoggedIn ? (
            <>
              <button onClick={logout}>Log Out</button>
              <button><Link to="/create-post">Create Post</Link></button>
              <button><Link to="/">Posts</Link></button>
              <button><Link to="/view-messages">Messages</Link></button>
            </>
          ) : (
            <>
              <button><Link to="/login">Login</Link></button>
              <button><Link to="/register">Register</Link></button>
              
            </>
          )
        
      }
      
      
    </nav>
  )
}


export default Nav;