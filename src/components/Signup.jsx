import React, { useState } from "react";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleGoogleSignup() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4 text-primary">Create Account</h2>
        
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-2">
            Sign Up
          </button>

          <div>
            <p className="d-flex justify-content-center fw-semibold text-secondary">OR</p>
          </div>

          <button
            type="button"
            className="btn btn-outline-danger w-100 mb-3"
            onClick={handleGoogleSignup}
          >
            <i className="bi bi-google me-2"></i> Sign Up with Google
          </button>
        </form>

        <div className="text-center">
          Already have an account?{" "}
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setShowLogin(true)}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
