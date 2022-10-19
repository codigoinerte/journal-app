// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQZt11DBmbcUV_RawRjRJmqOTEN5Hmg2o",
  authDomain: "react-curso-journal-app-e3541.firebaseapp.com",
  projectId: "react-curso-journal-app-e3541",
  storageBucket: "react-curso-journal-app-e3541.appspot.com",
  messagingSenderId: "845987461633",
  appId: "1:845987461633:web:b764202fd9564c87741e00"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );