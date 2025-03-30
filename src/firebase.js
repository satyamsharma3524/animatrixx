import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKpWe30Uu6lhVfqbGa2TxSOuKkNqNQPJM",
    authDomain: "animatrixx-29ebb.firebaseapp.com",
    projectId: "animatrixx-29ebb",
    storageBucket: "animatrixx-29ebb.appspot.com",
    messagingSenderId: "972714378937",
    appId: "1:972714378937:web:10ef4bccf434d214f93d68",
    measurementId: "G-LL3DRFYY0T"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
