import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcM1IYDdRE3MBP3i_BJAlXc7t_IKlSLNM",
  authDomain: "react-netflix-clone-1dc06.firebaseapp.com",
  projectId: "react-netflix-clone-1dc06",
  storageBucket: "react-netflix-clone-1dc06.appspot.com",
  messagingSenderId: "463615471825",
  appId: "1:463615471825:web:6bf5509e21ae93e7c055f0",
  measurementId: "G-0NCLPS6QNV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
