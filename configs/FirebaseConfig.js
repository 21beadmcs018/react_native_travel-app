// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZMcTt0dA97qlV1wRtlWwh9ND9bOqeang",
  authDomain: "react-native-3fc97.firebaseapp.com",
  projectId: "react-native-3fc97",
  storageBucket: "react-native-3fc97.appspot.com",
  messagingSenderId: "166422312643",
  appId: "1:166422312643:web:a7e59a8946125c0cd89476",
  measurementId: "G-SVWERN0C4L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);