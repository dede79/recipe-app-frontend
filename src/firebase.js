// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

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
