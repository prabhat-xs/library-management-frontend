import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import {AuthContext} from "../main";

function Login() {
  const {setUser,setIsLoggedIn} = useContext(AuthContext)
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });
  const loginHandler = async (e) => {
    e.preventDefault();
    //   todo
    const res = await axios.post(
      `${URI}/auth/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
      
    );
    setIsLoggedIn(true)
    setUser(res.User)
  };
  return (
    <>
      <div>Login</div>
      <form className="loginForm" onSubmit={loginHandler} method="post">
        <input type="email" name="" id="" required />
        <input type="password" name="" id="" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
