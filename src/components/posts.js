import React from "react";


function Posts( {posts} ) {
  console.log(posts);
  if (!Array.isArray(posts)) {
    return <p>No posts to display.</p>;
  }
  

  return(
    <>
      {
        posts && posts.map((post) =>{
          return(
            <p key={post._id}>{post.description}</p>
          )
        })
      }
    </>
  )
}

export default Posts