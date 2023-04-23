import React from "react";
import {useState} from 'react'
import { registerUser } from "../ajax-requests";

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    const user = {username, password};
    registerUser(user);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={(event) => setUsername(event.target.value)}>

      </input>
      <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}>

      </input>
      <button type='submit'>
        submit
      </button>
    </form>
  )
}

export default Register