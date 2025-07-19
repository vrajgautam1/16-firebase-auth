import React, { useEffect, useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { auth } from "./firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedin(true);
        setUserEmail(user.email);
      } else {
        setIsLoggedin(false);
        setUserEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  if (!isLoggedin) {
    return showLogin ? (
      <Login setShowLogin={setShowLogin} />
    ) : (
      <Signup setShowLogin={setShowLogin} />
    );
  }

  return (
    <div className="bg-light vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center text-success mb-4">
          <i className="bi bi-person-check-fill me-2"></i>Login Successful!
        </h2>
        <p className="text-center">
          Welcome <strong>{userEmail}</strong>
        </p>
        <p>
          This is a demo project that shows how to implement email/password and Google authentication
          using Firebase in React. It includes:
        </p>
        <ul>
          <li>✅ Firebase Authentication integration</li>
          <li>✅ Email/Password Signup & Login</li>
          <li>✅ Google Authentication</li>
          <li>✅ User session handling</li>
          <li>✅ Clean Bootstrap UI</li>
        </ul>
        <p className="text-muted">
          Use this as a boilerplate to add protected routes, user dashboards, and more.
        </p>
        <div className="text-center">
          <button className="btn btn-danger mt-3" onClick={() => signOut(auth)}>
            <i className="bi bi-box-arrow-right me-2"></i>Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
