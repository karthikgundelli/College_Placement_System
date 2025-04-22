// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDrgfaNFpUnF3JnsX8uvyhPO0CK_n0ExM",
  authDomain: "college-placement-ef0a1.firebaseapp.com",
  projectId: "college-placement-ef0a1",
  storageBucket: "college-placement-ef0a1.firebasestorage.app",
  messagingSenderId: "428626132450",
  appId: "1:428626132450:web:71bdcf245a3eddd4a6cdbb",
  measurementId: "G-ZDRJ8KV9P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };