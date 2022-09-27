// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDToOp1VjnYXrncQiYBi_s6edzUhyJ3Rzo",
  authDomain: "gianne-ecommerce.firebaseapp.com",
  projectId: "gianne-ecommerce",
  storageBucket: "gianne-ecommerce.appspot.com",
  messagingSenderId: "433795778168",
  appId: "1:433795778168:web:3a21d3dea0088a214d0f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);