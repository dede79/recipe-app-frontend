// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGN1U7wpjIFT65zbhMxoCnCGbGkZRw0Cc",
  authDomain: String(process.env.RECIPE_APP_FIREBASE_AUTH_DOMAIN),
  projectId: String(process.env.RECIPE_APP_FIREBASE_PROJECT_ID),
  storageBucket: String(process.env.RECIPE_APP_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: String(process.env.RECIPE_APP_FIREBASE_MESSAGING_SENDER_ID),
  appId: String(process.env.RECIPE_APP_FIREBASE_APP_ID),
  measurementId: String(process.env.RECIPE_APP_FIREBASE_MEASUREMENT_ID)
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
