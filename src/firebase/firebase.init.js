// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM1jNEa-waoh4yKy-aw5RKilVY-NyAH4Y",
  authDomain: "fir-auth-b1681.firebaseapp.com",
  projectId: "fir-auth-b1681",
  storageBucket: "fir-auth-b1681.appspot.com",
  messagingSenderId: "351862313405",
  appId: "1:351862313405:web:7d30c07ab23bdd53d7c2d4"
};

// Initialize Firebase
const app =  initializeApp(firebaseConfig);

export default app;