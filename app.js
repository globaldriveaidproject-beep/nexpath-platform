import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// 🧠 SEND REQUEST TO FIRESTORE
export async function sendRequest(text) {
  await addDoc(collection(db, "requests"), {
    message: text,
    time: new Date()
  });
}


// 🚨 PRIORITY ENGINE (THIS IS YOUR AI LOGIC)
export function getPriority(message) {
  message = message.toLowerCase();

  if (message.includes("shelter") || message.includes("no place") || message.includes("homeless")) {
    return "CRITICAL";
  }

  if (message.includes("food")) {
    return "HIGH";
  }

  if (message.includes("child")) {
    return "URGENT";
  }

  if (message.includes("medical") || message.includes("sick")) {
    return "EMERGENCY";
  }

  return "NORMAL";
}
