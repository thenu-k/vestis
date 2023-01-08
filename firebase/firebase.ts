import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDcarg33hgYMjMf02mhEhhHqH3s8Mawe44",
  authDomain: "vestis-80e6f.firebaseapp.com",
  projectId: "vestis-80e6f",
  storageBucket: "vestis-80e6f.appspot.com",
  messagingSenderId: "270647016809",
  appId: "1:270647016809:web:674048ac2aa8fe328dd1f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)