import React from 'react';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)  // Updated syntax for Firebase v9
      .then(result => {
        onLogin(result.user); // Pass the logged-in user to the parent component

        // Fetch the Firebase token after successful login
        auth.currentUser.getIdToken()
        .then(token => {
          console.log('Firebase Token:', token);
          localStorage.setItem('firebaseToken', token); // Store token in localStorage
        })
          .catch(error => {
            console.error('Error fetching Firebase token:', error);
          });
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