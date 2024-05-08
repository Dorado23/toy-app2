// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage, ref } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr0vn2cnGIzCyxvTIoAUXC-IKXoFqQXig",
  authDomain: "toy-webapp-2.firebaseapp.com",
  projectId: "toy-webapp-2",
  storageBucket: "toy-webapp-2.appspot.com",
  messagingSenderId: "441680120275",
  appId: "1:441680120275:web:f6678fd83cb810012a4726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app)
const storageRef = ref(storage)


export { app, analytics, db, storageRef} 