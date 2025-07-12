// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA_RGCktXmVhWTgMEtaOHUvIqDIXZCAXUw",
  authDomain: "my-portfolio-9871b.firebaseapp.com",
  projectId: "my-portfolio-9871b",
  storageBucket: "my-portfolio-9871b.firebasestorage.app",
  messagingSenderId: "547240586314",
  appId: "1:547240586314:web:46b86f4b8069397acdcab3",
};

// ✅ Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Export Firestore database
const db = getFirestore(app);

export { db };
