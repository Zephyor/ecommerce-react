// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyMv0GWKLXcx865crMFku2owb6Ie1u8JI",
  authDomain: "ecommerce-react-a1400.firebaseapp.com",
  projectId: "ecommerce-react-a1400",
  storageBucket: "ecommerce-react-a1400.appspot.com",
  messagingSenderId: "1023595257359",
  appId: "1:1023595257359:web:4ff2abde1be2cfea7e4d7a",
  measurementId: "G-Y8F1VWB0DD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
