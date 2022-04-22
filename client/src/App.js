import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard.js";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import User from "./components/user/User";
import Home from "./components/home/Home.js";
import CreatePost from "./components/createPost/CreatePost.js";

import { AuthContext } from "./helpers/AuthContext.js";
import axios from 'axios';



function App() {

  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios.get("https://server-app-back-farouk.azurewebsites.net:80/auth/auth",{
      headers: {
        accessToken: localStorage.getItem("accessToken")
      }
    }).then((response) => {
      if (response.data.error) {
        setAuthState(false)
      } else {
         setAuthState(true);
      }
    })
     
    
  }, [])

  const logout = () => {
    sessionStorage.removeItem("acessToken");
    setAuthState(false)
  }
  return (
    <div className="container-lg ">
      
      
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
           
        {/* {!authState ? (
        
          <> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* </> */}
        {/* // ) :( 
          
        //    )} */}
          <Route path="/user/:id" element={<User />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
    
    </div>
  );
}

export default App;
