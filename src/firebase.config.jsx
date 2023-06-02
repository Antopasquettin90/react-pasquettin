// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6u0_zoRV78DgA5MYJW_dl0lAHjnvhTRM",
  authDomain: "quijotedisco-9fbf6.firebaseapp.com",
  projectId: "quijotedisco-9fbf6",
  storageBucket: "quijotedisco-9fbf6.appspot.com",
  messagingSenderId: "1077980218435",
  appId: "1:1077980218435:web:4dac0a79bc25817833c0f6",
  measurementId: "G-H7RM2FBB7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);