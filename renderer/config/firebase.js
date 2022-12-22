// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRHof9PIPoS7zlSW25HWduHM0Dgv2f5As",
  authDomain: "tpadesktop-73dd5.firebaseapp.com",
  databaseURL: "https://tpadesktop-73dd5-default-rtdb.firebaseio.com",
  projectId: "tpadesktop-73dd5",
  storageBucket: "tpadesktop-73dd5.appspot.com",
  messagingSenderId: "1063508565054",
  appId: "1:1063508565054:web:695f9d4057722bddf3056f",
  measurementId: "G-4SSE5M1HWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuthentication = getAuth(app);
export const db = getFirestore(app);



