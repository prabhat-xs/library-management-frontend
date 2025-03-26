import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../main";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //todo
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });
  const loginHandler = async (e) => {
    e.preventDefault();

    const { user } = await axios.post(
      `${import.meta.env.URI}/auth/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
    setIsLoggedIn(true);
    setUser(user);
    navigate("/dashboard");
  };
  return (
    <>
      <div>Login</div>
      <form className="loginForm" onSubmit={loginHandler} method="post">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id=""
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
