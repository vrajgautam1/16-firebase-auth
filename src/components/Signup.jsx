// components/Signup.jsx
import React, { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup({ setShowLogin }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      // Firebase automatically logs in user after signup
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
        <p className="mt-3">
          Already have an account?{" "}
          <button type="button" className="btn btn-link p-0" onClick={() => setShowLogin(true)}>
            Login here
          </button>
        </p>
      </form>
    </div>
  );
}

export default Signup;
