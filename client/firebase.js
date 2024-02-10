// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c3a6b.firebaseapp.com",
  projectId: "mern-blog-c3a6b",
  storageBucket: "mern-blog-c3a6b.appspot.com",
  messagingSenderId: "930981393820",
  appId: "1:930981393820:web:a691cc3db5c52867af4459",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);