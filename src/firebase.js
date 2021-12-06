import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB9TuP_mGoxHD1mrZy9HesDDFggqiUKoVI",
  authDomain: "portfolio-app-5d1f4.firebaseapp.com",
  projectId: "portfolio-app-5d1f4",
  storageBucket: "portfolio-app-5d1f4.appspot.com",
  messagingSenderId: "970348828507",
  appId: "1:970348828507:web:5ae36a9a47b255099a2c7e",
  measurementId: "G-5PW9BWQ9QE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
