import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxTEisc7KJSLQvfRmwEvHivpNujtd3EK0",
  authDomain: "clean-co-a3e37.firebaseapp.com",
  projectId: "clean-co-a3e37",
  storageBucket: "clean-co-a3e37.appspot.com",
  messagingSenderId: "625739619511",
  appId: "1:625739619511:web:0c3a9b560108c6cd8e0132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
