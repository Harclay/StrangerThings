import React from "react";
import { useState } from "react";
import { registerUser } from "../ajax-requests";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function Register({ setToken, navigate}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [saveToken, setSaveToken] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const user = { username, password };


   const results = await registerUser(user);
   if(results.success) {
      setToken(results.data.token)
      if(saveToken) {
        window.localStorage.setItem('token', results.data.token)
      }
      navigate("/")
   } else {
    setErrorMessage(results.error.message)
    
   }
  }

  return (
    <>
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              
            />
            <FormControlLabel
              control={<Checkbox value="" color="primary" />}
              label="Remember me"
              onChange={(event) => setSaveToken(event.target.checked)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              
              {!errorMessage ? "Register" : <Typography color="error">{errorMessage}</Typography> }
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
      
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <label>
        <input
            type="checkbox"
            onChange={(event) => setSaveToken(true)}>
          </input>
          Stay Signed In?
        </label>
        
        <button type="submit">submit</button>
      </form> */}
    </>
  );
  
}

export default Register;
