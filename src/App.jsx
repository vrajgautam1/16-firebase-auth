// App.jsx
import React, { useEffect, useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import { auth } from './firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showLogin, setShowLogin] = useState(true); // toggle between Login and Signup

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedin(!!user);
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
    <div className="container mt-5">
      <h1>Welcome to Homepage 🎉</h1>
      <button className="btn btn-danger mt-3" onClick={() => signOut(auth)}>
        Logout
      </button>
    </div>
  );
}

export default App;
