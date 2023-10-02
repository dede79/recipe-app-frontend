// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: String(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
//   projectId: String(process.env.REACT_APP_FIREBASE_PROJECT_ID),
//   storageBucket: String(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
//   messagingSenderId: String(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
//   appId: String(process.env.REACT_APP_FIREBASE_APP_ID),
//   measurementId: String(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)
// };

const firebaseConfig = {
  apiKey: "AIzaSyCGN1U7wpjIFT65zbhMxoCnCGbGkZRw0Cc",
  authDomain: "dlicious-22926.firebaseapp.com",
  projectId: "dlicious-22926",
  storageBucket: "dlicious-22926.appspot.com",
  messagingSenderId: "927600432622",
  appId: "1:927600432622:web:43e1d6ff9784cdaa2baaff",
  measurementId: "G-QGLFNMV94E",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
