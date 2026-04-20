import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZuksXvvht9xPUTX32uOQx7h8ODvuRwJo",
  authDomain: "nexpath-platform.firebaseapp.com",
  projectId: "nexpath-platform",
  storageBucket: "nexpath-platform.firebasestorage.app",
  messagingSenderId: "1094642467861",
  appId: "1:1094642467861:web:a60226b4d96b57a2c8fa1c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
