// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwTmAj_15T_Zq7PdWIchVKZ-9NIoTTUFg",
  authDomain: "toy-webapp.firebaseapp.com",
  databaseURL: "https://toy-webapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "toy-webapp",
  storageBucket: "toy-webapp.appspot.com",
  messagingSenderId: "820182315747",
  appId: "1:820182315747:web:61d4af6da395ee1e670bd6",
  measurementId: "G-CF9PDCEGXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export { app, analytics, db }