// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Xbs-04ZtbQqXnaO7nSiMMF0DRY7oPjg",
  authDomain: "simple-firebase-login-au-9bf5e.firebaseapp.com",
  projectId: "simple-firebase-login-au-9bf5e",
  storageBucket: "simple-firebase-login-au-9bf5e.firebasestorage.app",
  messagingSenderId: "842837350504",
  appId: "1:842837350504:web:e7a5239683a667fe3f83dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);