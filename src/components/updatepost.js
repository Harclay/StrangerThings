import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updatePost } from "../ajax-requests";
import { useNavigate } from "react-router-dom";


function UpdatePost( { posts, token, getPosts } ) {
  const navigate = useNavigate();
  const {postId} = useParams();

  const [post] = posts.filter((post) => post._id === postId )
  
  console.log("single post", post)
  

  const {title, description, price, location, willDeliver} = post ? post : {};

  const [updatedTitle, setTitle] = useState(title);
  const [updatedDescription, setDescription] = useState(description);
  const [updatedPrice, setPrice] = useState(price);
  const [updatedLocation, setLocation] = useState(location);
  const [updatedWillDeliver, setWillDeliver] = useState(willDeliver);
  const [errorMessage, setErrorMessge] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedPost = {
      title: updatedTitle,
      description: updatedDescription,
      price: updatedPrice,
      location: updatedLocation,
      willDeliver: updatedWillDeliver
    }

   const results = await updatePost(postId, token, updatedPost);
   if(results.success) {
    getPosts();
    navigate("/")
   } else {
    setErrorMessge(results.error.message)
   }
   
  }

  return (
    <>
      {post ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={updatedTitle}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            <input
              type="text"
              value={updatedDescription}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <input
              type="text"
              value={updatedPrice}
              onChange={(ev) => setPrice(ev.target.value)}
            />
            <input
              type="text"
              value={updatedLocation}
              onChange={(ev) => setLocation(ev.target.value)}
            />
            I will Deliver?
            <input
              type="checkbox"
              checked={updatedWillDeliver}
              onChange={() => setWillDeliver(!updatedWillDeliver)}
            />
            <button type='submit'>Save Changes</button>
          </form>
          {
            errorMessage && <p>{errorMessage}</p>
          }
        </>
      ) : (
        <h1>Post Does Not Exist.</h1>
      )}
    </>
  );

  
}

export default UpdatePost