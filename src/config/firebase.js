// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtKCJ4rwTTJAaj6L1aT_eN_O3Vr-gIPhY",
  authDomain: "agora-challenge.firebaseapp.com",
  projectId: "agora-challenge",
  storageBucket: "agora-challenge.appspot.com",
  messagingSenderId: "391976188141",
  appId: "1:391976188141:web:0aafc4a60c78ee43ef34e4",
  measurementId: "G-PXGY1BYQNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);