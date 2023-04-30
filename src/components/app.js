import React, {useState, useEffect} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Register,
  Posts,
  Login,
  CreatePost,
  UpdatePost,
  Nav
  
} from "./"
import { fetchPosts, myData } from "../ajax-requests";


function App() {
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState ({});
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate();
  const tokenStoreage = window.localStorage.getItem('token')

  function tokenCheck(){
    if(tokenStoreage){
      setToken(tokenStoreage);
    }
  }
  
  async function getPosts() {
    const results = await fetchPosts(token);
    if (results.success) {
      setPosts(results.data.posts);
    }
  }

  async function getMyData() {
    const results = await myData(token);
    if (results.success) {
      setUser(results.data);
    }
  }

  useEffect(() => {
    tokenCheck();
  }, [])


   useEffect(() => {
    setPosts(getPosts());
    if(token) {
      getMyData();
      setIsLoggedIn(true)
    }
  }, [token])

  

  console.log(posts)

  return (
    <div>
      <Nav 
        setToken={setToken} 
        setIsLoggedIn={setIsLoggedIn} 
        isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path='/update-post/:postId' element={<UpdatePost posts={posts}/>}/>
        <Route path="/create-post" element={<CreatePost token={token} getPosts={getPosts}/>}/>
        <Route path='/login' element={<Login setToken={setToken} navigate={navigate}/>}/>
        <Route path='/' element={<Posts posts={posts} isLoggedIn={isLoggedIn}/>}/>
        <Route path='/register'element={<Register setToken={setToken} navigate={navigate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
