// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "trauma-blog.firebaseapp.com",
  projectId: "trauma-blog",
  storageBucket: "trauma-blog.appspot.com",
  messagingSenderId: "474137656065",
  appId: "1:474137656065:web:de457fb3e34d665c83f900",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
