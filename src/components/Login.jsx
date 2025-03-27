import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, setAuthToken } from "../services/api";
import { AuthContext, useAuth } from "../App";
import toast from "react-hot-toast"; 
import Cookies from "js-cookie";
// todo use react-cookie pkg
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const { user, setUser } = useAuth();
  const { user, setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try { 
      const res = await login({ email, password });
      setUser(res.user);
      setAuthToken(Cookies.get("token"));
      // setAuthToken(res.token);
      toast.success("Login succe  ssful");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
