// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
// enter
//  you 
//  firebase 
// db
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
