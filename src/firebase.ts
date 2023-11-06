import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDG0yXsaSKPcOAy7chmFBS-Y_7V5QunZKw",
  authDomain: "nwitter-reloaded-6ec0b.firebaseapp.com",
  projectId: "nwitter-reloaded-6ec0b",
  storageBucket: "nwitter-reloaded-6ec0b.appspot.com",
  messagingSenderId: "438451952680",
  appId: "1:438451952680:web:8610f8fcb3b52d6affa91d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);