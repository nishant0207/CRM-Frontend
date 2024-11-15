// Login.js
import React from 'react';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)  // Updated syntax for Firebase v9
      .then(result => {
        onLogin(result.user);
      })
      .catch(error => {
        console.error("Error logging in:", error);
        alert("Failed to log in");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;