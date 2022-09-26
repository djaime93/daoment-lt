// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCURt_AjiYdB4Yy-Cm9G1sOqMgm4t7DOnk",
  authDomain: "daoment-8ea01.firebaseapp.com",
  projectId: "daoment-8ea01",
  storageBucket: "daoment-8ea01.appspot.com",
  messagingSenderId: "148086483279",
  appId: "1:148086483279:web:b64fb74b9472561490fd3a",
  measurementId: "G-M1J88ZC29L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);