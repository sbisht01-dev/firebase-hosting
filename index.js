// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkf4Hl6w_qbVnRlBehpZl6v2TfhbjhfVo",
  authDomain: "fir-hosting-14eba.firebaseapp.com",
  projectId: "fir-hosting-14eba",
  storageBucket: "fir-hosting-14eba.appspot.com",
  messagingSenderId: "1044160457262",
  appId: "1:1044160457262:web:3a0c3f4c7db0622823cdbf",
  measurementId: "G-GD8P99T0G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    