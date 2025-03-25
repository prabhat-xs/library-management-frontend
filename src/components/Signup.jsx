import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    ContactNumber: "",
    LibraryName: "",
    Password: "",
  });
  return (
    <>
      <div>SignUp</div>
      <form onSubmit={singupHandler} method="post">
        <input type="text" name="Name" id="Name" placeholder="Name" required />
        <input type="email" name="email" id="" required />
        <input type="text" name="contactNumber" id="" required />
        <input type="text" name="libraryName" id="" required />
        <input type="password" name="password" id="" required />
        <button type="submit">SignUp</button>
      </form>
    </>
  );
}

export default Signup;
