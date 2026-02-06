import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "propuesta-noviazo.firebaseapp.com",
  projectId: "propuesta-noviazo",
  storageBucket: "propuesta-noviazo.firebasestorage.app",
  messagingSenderId: "311038871515",
  appId: "1:311038871515:web:987e0ea4308c9c4bb989fe",
  measurementId: "G-9PNQ2LGNPK"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

console.log("🔥 Firebase conectado correctamente");
