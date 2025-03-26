import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [libName, setLibName] = useState("");
  const [password, setPassowrd] = useState("");
  return (
    <>
      <div>SignUp</div>
      <form onSubmit={singupHandler} method="post">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          id=""
          required
        />
        <input
          type="text"
          name="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          id=""
          required
        />
        <input
          type="text"
          name="libraryName"
          value={libName}
          onChange={(e) => setLibName(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassowrd(e.target.value)}
          required
        />
        <button type="submit">SignUp</button>
      </form>
    </>
  );
}

export default Signup;
