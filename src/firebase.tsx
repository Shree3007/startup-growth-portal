import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBhiIkF0ZgPARbdTVSh7mPen1A0wrJzXDk",
    authDomain: "gdghack-bbfa8.firebaseapp.com",
    projectId: "gdghack-bbfa8",
    storageBucket: "gdghack-bbfa8.firebasestorage.app",
    messagingSenderId: "348833806111",
    appId: "1:348833806111:web:8ce8d0f87fb3b06e98222a"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
