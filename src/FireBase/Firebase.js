import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCAAdUSJUZDN3ytg9AN2-hZujDtXtJDAe4",
  authDomain: "ajetreoprod.firebaseapp.com",
  projectId: "ajetreoprod",
  storageBucket: "ajetreoprod.appspot.com",
  messagingSenderId: "979036206614",
  appId: "1:979036206614:web:09a18ada61a566e0eba737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { db, auth };