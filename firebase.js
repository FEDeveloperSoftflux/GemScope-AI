// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA44vW0jW8gMHMJxxybRu_NTF123QbSnvM",
  authDomain: "genscope-ai.firebaseapp.com",
  projectId: "genscope-ai",
  storageBucket: "genscope-ai.firebasestorage.app",
  messagingSenderId: "868945518810",
  appId: "1:868945518810:web:21e070edfe7a078543c5e3",
  measurementId: "G-LSCGWQ1Q1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);