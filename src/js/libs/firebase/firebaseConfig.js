// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF9b6eeEUkg4GEsQlXw2IGQ4qwhj9Hhp0",
  authDomain: "domdmit-storefront-assessment1.firebaseapp.com",
  projectId: "domdmit-storefront-assessment1",
  storageBucket: "domdmit-storefront-assessment1.appspot.com",
  messagingSenderId: "269337814248",
  appId: "1:269337814248:web:23b3edf4b8cd9c6306d55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export {db, storage}