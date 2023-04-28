import React, { Fragment } from "react";


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
            <Fragment key={post._id}>
              {
                post.isAuthor ? (
                  <>
                    <p >{post.title}</p>
                    <button>Delete</button>
                  </>
                ) : (
                  <Fragment>
                    <p>{post.title}</p>
                    <button>Message</button>
                  </Fragment>
                )

              }
            </Fragment>
          )
        })
      }
    </>
  )
}

export default Posts