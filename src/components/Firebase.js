import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup,signOut } from "firebase/auth";
import {
  collection,
  addDoc,
  getFirestore,
  query,
  where,
  onSnapshot,
  doc, serverTimestamp ,
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAitZ5mjmoXVgLMMdATagmolbN1gsA2NBg",
  authDomain: "chatapp-6ec38.firebaseapp.com",
  projectId: "chatapp-6ec38",
  storageBucket: "chatapp-6ec38.appspot.com",
  messagingSenderId: "803512701483",
  appId: "1:803512701483:web:1b5ba0badbb52c2299906e",
  measurementId: "G-KHPN9CVFEL",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  auth,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
  db,
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  doc, serverTimestamp ,
  getDocs,
  signOut
};
