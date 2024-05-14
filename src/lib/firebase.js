import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-9d58b.firebaseapp.com",
  projectId: "reactchat-9d58b",
  storageBucket: "reactchat-9d58b.appspot.com",
  messagingSenderId: "1091289032639",
  appId: "1:1091289032639:web:741de9f7ac8622b5e0230a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()