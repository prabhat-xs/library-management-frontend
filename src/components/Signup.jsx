// import React, { useState } from "react";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contactNumber, setContactNumber] = useState("");
//   const [libName, setLibName] = useState("");
//   const [password, setPassowrd] = useState("");
//   return (
//     <>
//       <div>SignUp</div>
//       <form onSubmit={singupHandler} method="post">
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="email"
//           value={email}
//           name="email"
//           onChange={(e) => setEmail(e.target.value)}
//           id=""
//           required
//         />
//         <input
//           type="text"
//           name="contactNumber"
//           value={contactNumber}
//           onChange={(e) => setContactNumber(e.target.value)}
//           id=""
//           required
//         />
//         <input
//           type="text"
//           name="libraryName"
//           value={libName}
//           onChange={(e) => setLibName(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassowrd(e.target.value)}
//           required
//         />
//         <button type="submit">SignUp</button>
//       </form>
//     </>
//   );
// }

// export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/api";
import { useAuth } from "../App";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await signup({ name, email, password });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      toast.success("Signup successful");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
