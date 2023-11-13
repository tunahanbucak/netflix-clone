import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDOjwLOFTzXKYyVFmw5FEWu6sylc96EG0",
  authDomain: "netflix-clone-43d1d.firebaseapp.com",
  projectId: "netflix-clone-43d1d",
  storageBucket: "netflix-clone-43d1d.appspot.com",
  messagingSenderId: "1039332578426",
  appId: "1:1039332578426:web:5275f47e720fd8a9aa97c3",
  measurementId: "G-J1NCWM7PGM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
