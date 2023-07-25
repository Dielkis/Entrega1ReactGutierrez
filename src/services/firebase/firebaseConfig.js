// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyB9CGhgrxl5h-VMACpsFfEr4HMuEuVaBXA",
  authDomain: "ecomerce-87774.firebaseapp.com",
  projectId: "ecomerce-87774",
  storageBucket: "ecomerce-87774.appspot.com",
  messagingSenderId: "683776569330",
  appId: "1:683776569330:web:c930d0d262770ac8a4056b",
  measurementId: "G-3HYSPWHPCV"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // Firestore instance