import React, {useState, useEffect} from "react";
import { Routes, Route, } from "react-router-dom";
import {
  Register,
  Posts
} from "./"
import { fetchPosts } from "../ajax-requests";


function App() {
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  const tokenStoreage = window.localStorage.getItem('token')

  function tokenCheck(){
    if(tokenStoreage){
      setToken(tokenStoreage);
    }
  }
  
  async function getPosts() {
    const results = await fetchPosts();
    if (results.success) {
      setPosts(results.data.posts);
    }
  }

  useEffect(() => {
    tokenCheck();
  }, [])


   useEffect(() => {
    setPosts(getPosts());
  }, [token])

  console.log(posts)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Posts posts={posts}/>}/>
        <Route path='/register'element={<Register setToken={setToken}/>}/>
      </Routes>
    </div>
  );
}

export default App;
