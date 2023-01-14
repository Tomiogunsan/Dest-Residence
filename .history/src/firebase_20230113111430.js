// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMAPHSvv8Qy6p8HMs_ze8la46YQB2NwZ0",
  authDomain: "dest-residence.firebaseapp.com",
  projectId: "dest-residence",
  storageBucket: "dest-residence.appspot.com",
  messagingSenderId: "25363052861",
  appId: "1:25363052861:web:b7be25ef8eb56e868ded54"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const