import React from "react";
import { useState } from "react";
import { registerUser } from "../ajax-requests";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const user = { username, password };


   const results = await registerUser(user);
   if(results.success) {
      props.setToken(results.data.token)
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

export default Register;
