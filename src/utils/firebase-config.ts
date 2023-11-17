import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBW5Xn-iYsXL936ZjjJhvU1uj6HGCuiUb0",
  authDomain: "netflix-clone-77006.firebaseapp.com",
  projectId: "netflix-clone-77006",
  storageBucket: "netflix-clone-77006.appspot.com",
  messagingSenderId: "634463244507",
  appId: "1:634463244507:web:a14d9eec0dc865c8e83cfe",
  measurementId: "G-8WE6CSZVLN",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);
