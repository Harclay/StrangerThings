import React, { useState } from "react";
import { login } from "../ajax-requests"

function Login( {setToken} ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
      event.preventDefault();
      const user = { username, password };


    const results = await login(user);
    if(results.success) {
        setToken(results.data.token)
        window.localStorage.setItem('token', results.data.token)
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
        <button type="submit">submit</button>
      </form>
    );
    
}


export default Login