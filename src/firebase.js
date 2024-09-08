import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrS-9GKFp7MklaC0yXt4hgfBzL3ZEH4a4",
  authDomain: "e-commerce-483ac.firebaseapp.com",
  projectId: "e-commerce-483ac",
  storageBucket: "e-commerce-483ac.appspot.com",
  messagingSenderId: "254262283295",
  appId: "1:254262283295:web:49fe709c79cdf21bf0592a",
  measurementId: "G-3E105XZ1Y4",
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
