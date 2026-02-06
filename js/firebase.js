
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAfIzjkakHkBzksli1k4fmo-38dOTG64Vo",
    authDomain: "propuesta-33aaf.firebaseapp.com",
    projectId: "propuesta-33aaf",
    storageBucket: "propuesta-33aaf.firebasestorage.app",
    messagingSenderId: "151983086755",
    appId: "1:151983086755:web:29f9a994b5983bace3f316",
    measurementId: "G-QSYBPECWLL"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


console.log("🔥 Firebase conectado correctamente");
