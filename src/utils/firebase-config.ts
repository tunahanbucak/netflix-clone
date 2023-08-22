import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBm1bQDEHl26XWfjPaJJgo0PmqnYCVsTd0",
  authDomain: "netflix-8ba4d.firebaseapp.com",
  projectId: "netflix-8ba4d",
  storageBucket: "netflix-8ba4d.appspot.com",
  messagingSenderId: "5695517899",
  appId: "1:5695517899:web:b13e558ad76396ac78d74e",
  measurementId: "G-Q9YJS2M99K",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
