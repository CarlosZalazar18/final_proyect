// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuCbl7TcdFiHv7mNctpYK_1SFR316MWmU",
  authDomain: "final-proyect-1a53e.firebaseapp.com",
  projectId: "final-proyect-1a53e",
  storageBucket: "final-proyect-1a53e.appspot.com",
  messagingSenderId: "816239431920",
  appId: "1:816239431920:web:921f0e602992bd460b7235",
  measurementId: "G-QPNTWBWHMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);