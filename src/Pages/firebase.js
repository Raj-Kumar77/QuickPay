import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtZIw0D0Hm8WHYrqvbGg_TyA3-68QHyv4",
    authDomain: "reactfirebasewebsite-da438.firebaseapp.com",
    databaseURL: "https://reactfirebasewebsite-da438-default-rtdb.firebaseio.com",
    projectId: "reactfirebasewebsite-da438",
    storageBucket: "reactfirebasewebsite-da438.appspot.com",
    messagingSenderId: "273811414424",
    appId: "1:273811414424:web:4b11a1f2007c4255bc1fed"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


// https://reactfirebasewebsite-da438.web.app ----hosting link for the current project