// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT4NNuG0IGe-xmYtmvHhsgB2bO6Lsy99M",
  authDomain: "xeno-crm-karan.firebaseapp.com",
  projectId: "xeno-crm-karan",
  storageBucket: "xeno-crm-karan.firebasestorage.app",
  messagingSenderId: "748410233618",
  appId: "1:748410233618:web:7cef0610eafb1d805709cb",
  measurementId: "G-7FFF8CQHK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and Authentication
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();