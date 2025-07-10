// components/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

function Login({ setShowLogin }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
    } catch (err) {
      setError("Invalid credentials. Try again.");
    }
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
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
        <button type="submit" className="btn btn-success">
          Login
        </button>
        <p className="mt-3">
          Don't have an account?{" "}
          <button type="button" className="btn btn-link p-0" onClick={() => setShowLogin(false)}>
            Signup here
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
