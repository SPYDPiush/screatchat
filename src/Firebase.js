// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyCONqoHlu-uE9VU_vNoR5CcA36inakpQYg",
  authDomain: "affworld-41d52.firebaseapp.com",
  projectId: "affworld-41d52",
  storageBucket: "affworld-41d52.appspot.com",
  messagingSenderId: "211639099565",
  appId: "1:211639099565:web:1f352198613719248e6624",
  measurementId: "G-XY2NNJXJRR"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
export const db = getFirestore();