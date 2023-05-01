import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../ajax-requests";
import { Grid } from "@mui/material";




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
    <Grid container spacing={2}>
      {posts &&
        posts.map((post) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
              <div style={{ padding: "1rem", backgroundColor: "#f4f4f4", }}>
                {post.isAuthor ? (
                  <>
                    <p>{post.title}</p>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                    <Link to={`/update-post/${post._id}`}>
                      <button>Edit Post</button>
                    </Link>
                  </>
                ) : (
                  <Fragment>
                    <p>{post.title}</p>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    {isLoggedIn ? (
                      <Link to={`/message-user/${post._id}/messages`}>
                        <button>Message</button>
                      </Link>
                    ) : null}
                  </Fragment>
                )}
              </div>
            </Grid>
          );
        })}
    </Grid>
  )
}

export default Posts