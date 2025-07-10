// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzSiAv6ZS9TJnMK-geQytIrhVDbB0RLxg",
  authDomain: "react-firebase-project-1-39be2.firebaseapp.com",
  databaseURL: "https://react-firebase-project-1-39be2-default-rtdb.firebaseio.com",
  projectId: "react-firebase-project-1-39be2",
  storageBucket: "react-firebase-project-1-39be2.firebasestorage.app",
  messagingSenderId: "106673158997",
  appId: "1:106673158997:web:15edfd6be583501cb70ddc",
  measurementId: "G-SP0W528VQ7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
