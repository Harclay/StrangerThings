import React, {useState, useEffect} from "react";
import Register from "./register";

function App() {
  const [token, setToken] = useState('');
  const tokenStoreage = window.localStorage.getItem('token')

  function tokenCheck(){
    if(tokenStoreage){
      setToken(tokenStoreage);
    }
  }
  
  useEffect(() => {
    tokenCheck();
  }, [])

  console.log('stateful-token', token)

  return (
    <div>
      <Register setToken={setToken}/>
    </div>
  );
}

export default App;
