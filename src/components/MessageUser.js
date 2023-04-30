import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { postMessage } from "../ajax-requests";
import { useNavigate } from "react-router-dom";

function MessageUser( {token} ) {
  const {postId} = useParams();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await postMessage(postId, token, message)
    if(results.success) {
      navigate("/")
    } else {
      setErrorMessage(results.error.message)
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="type message"
          onChange={(event) => {setMessage(event.target.value)}}
        ></input>
        <button type="submit">Submit Message</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </>
  )
  
}

export default MessageUser