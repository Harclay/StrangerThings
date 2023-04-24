import React from "react";


function Posts( {posts} ) {
  // console.log('from Posts comp', posts)

  return(
    <>
      {
        posts && posts.map((post) =>{
          return(
            <p>{post.title}</p>
          )
        })
      }
    </>
  )
}

export default Posts