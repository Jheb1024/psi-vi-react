// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhu296aES3wMeNCJC50PzkN0Wpv_j7k6w",
  authDomain: "psivi-cd296.firebaseapp.com",
  projectId: "psivi-cd296",
  storageBucket: "psivi-cd296.appspot.com",
  messagingSenderId: "738499549707",
  appId: "1:738499549707:web:365d4d11ea93c0afeb850e",
  measurementId: "G-DHE6Q50NC3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);