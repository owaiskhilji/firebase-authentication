import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpDr54wP2UiaPSkgfY25pt_Upv10Tt7Dk",
  authDomain: "authentication-43867.firebaseapp.com",
  projectId: "authentication-43867",
  storageBucket: "authentication-43867.appspot.com",
  messagingSenderId: "635876514754",
  appId: "1:635876514754:web:cf2dc522a7143ceb32545b",
  measurementId: "G-WX3SXTS05D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
