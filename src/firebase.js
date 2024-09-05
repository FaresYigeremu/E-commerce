import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCAbMwtVl4uSH78hlPT4IuZ2IywL41eeo",
  authDomain: "clone-a1514.firebaseapp.com",
  projectId: "clone-a1514",
  storageBucket: "clone-a1514.appspot.com",
  messagingSenderId: "744640764020",
  appId: "1:744640764020:web:b9d99c7fd1dfe545545921",
  measurementId: "G-2MC9YNNTG5",
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
