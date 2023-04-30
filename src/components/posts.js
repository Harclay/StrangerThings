import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../ajax-requests";




function Posts( {posts, isLoggedIn, token, getPosts} ) {
  console.log(posts);
  if (!Array.isArray(posts)) {
    return <p>No posts to display.</p>;
  }
  
  const handleDelete = async (postId) => {
    try{
      const results = await deletePost(token, postId)
      console.log(results)
      getPosts();
    } catch (err) {
      console.error(err);
    }
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
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                    <Link to={`/update-post/${post._id}`}><button>Edit Post</button></Link>
                  </>
                ) : (
                  <Fragment>
                    <p>{post.title}</p>
                    {isLoggedIn ? <Link to={`/message-user/${post._id}/messages`}><button>Message</button></Link> : null}
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