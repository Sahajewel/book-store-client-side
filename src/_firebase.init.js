// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectid: import.meta.env.VITE_projectid,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderid: import.meta.env.VITE_messagingSenderid,
  appid: import.meta.env.VITE_appid
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);