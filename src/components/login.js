import React, { useState } from "react";
import { login } from "../ajax-requests"

function Login( {setToken, navigate} ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [saveToken, setSaveToken] = useState(false)
    

    async function handleSubmit(event) {
      event.preventDefault();
      const user = { username, password };


      const results = await login(user);
      if(results.success) {
          setToken(results.data.token)
          if(saveToken){
            window.localStorage.setItem('token', results.data.token)
          }
          navigate('/')
      }

      
    }

    return (
      <form onSubmit={handleSubmit}>
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
      </form>
    );
    
}


export default Login