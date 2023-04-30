import React from "react";
import { useParams } from "react-router-dom";

function UpdatePost( { posts } ) {
  const {postId} = useParams();

  const [post] = posts.filter((post) => post._id === postId )
  
  console.log("single post", post)

  return(
    <h1>update posts</h1>
  )
}

export default UpdatePost