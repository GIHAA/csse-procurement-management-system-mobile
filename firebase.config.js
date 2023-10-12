import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8QkBaroITVyA42fPhwoWw9Oc-oArMNms",
  authDomain: "spm-project-f710d.firebaseapp.com",
  projectId: "spm-project-f710d",
  storageBucket: "spm-project-f710d.appspot.com",
  messagingSenderId: "561303041928",
  appId: "1:561303041928:web:57eca91fe95b9e747c6c3d",
  measurementId: "G-T6W1FY3CZ6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize the Firebase Authentication service
export const storage = getStorage(app);
export const db = getFirestore(app);

export { auth };