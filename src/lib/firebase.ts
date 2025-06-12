
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// Firebase project configuration based on user-provided image
const firebaseConfig = {
  apiKey: "AIzaSyD0d2rghlKufA6EEF5i99hFxqm93mGFzrs",
  authDomain: "gamblr-nation-5f47b.firebaseapp.com",
  projectId: "gamblr-nation-5f47b",
  storageBucket: "gamblr-nation-5f47b.firebasestorage.app",
  messagingSenderId: "494203262407",
  appId: "1:494203262407:web:2e48ee332354f20f7a35e2",
  measurementId: "G-BXD548QSGC" 
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app);

export { app, auth /*, firestore, storage */ };

