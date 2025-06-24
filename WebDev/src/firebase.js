// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAClt2QU-RFLXFurenha-uhbxAI9HsAp3g",
  authDomain: "task-manager-25ae4.firebaseapp.com",
  databaseURL: "https://task-manager-25ae4-default-rtdb.firebaseio.com",
  projectId: "task-manager-25ae4",
  storageBucket: "task-manager-25ae4.firebasestorage.app",
  messagingSenderId: "702427926685",
  appId: "1:702427926685:web:b468252ca7ead572020474",
  measurementId: "G-3KWHV7YS86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Must be called first
const analytics = getAnalytics(app); //from firebase docs
export const auth = getAuth(app);
export const db = getFirestore(app);