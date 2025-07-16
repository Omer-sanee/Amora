// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVsJjnjwGGGUUxj7Zx-Sn0fwH-bIRr7Ok",
  authDomain: "myloveapp-1e4a9.firebaseapp.com",
  databaseURL: "https://myloveapp-1e4a9-default-rtdb.firebaseio.com",
  projectId: "myloveapp-1e4a9",
  storageBucket: "myloveapp-1e4a9.firebasestorage.app",
  messagingSenderId: "661630991428",
  appId: "1:661630991428:web:98aa8110cf4b571e749011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Database
export const auth = getAuth(app);
export const db = getDatabase(app);
