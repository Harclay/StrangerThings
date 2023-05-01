import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function Nav( {setToken, setIsLoggedIn, isLoggedIn} ) {
  function logout() {
    setToken('');
    setIsLoggedIn(false)
    window.localStorage.removeItem("token");
    
  }

  


  return(
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Strangers Things
            </Typography>
            {isLoggedIn ? (
            <>
              <Button color="inherit" onClick={logout}>Log Out</Button>
              <Button color="inherit"><Link to="/create-post" style={{ textDecoration: 'none', color: 'white' }}>Create Post</Link></Button>
              <Button color="inherit"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Posts</Link></Button>
              <Button color="inherit"><Link to="/view-messages" style={{ textDecoration: 'none', color: 'white' }}>Messages</Link></Button>
            </>
          ) : (
            <>
              <Button color="inherit"><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></Button>
              <Button color="inherit"><Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</Link></Button>
              
            </>
          )
        
      }
          </Toolbar>
        </AppBar>
      </Box>
      
      
    </nav>
  )
}


export default Nav;