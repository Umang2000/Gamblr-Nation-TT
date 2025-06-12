
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// Firebase project configuration based on user-provided image
const firebaseConfig = {
  apiKey: "AlzaSyDOd2rghlKufA6EEF5i99hFxqm93mGFzrs",
  authDomain: "gamblr-nation-5f47b.firebaseapp.com",
  projectId: "gamblr-nation-5f47b",
  storageBucket: "gamblr-nation-5f47b.appspot.com",
  messagingSenderId: "494203262407",
  appId: "YOUR_APP_ID", // Please find this in your Firebase Console > Project Settings > General > Your Apps > SDK setup and configuration
  measurementId: undefined 
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

