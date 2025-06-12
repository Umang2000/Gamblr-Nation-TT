
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// TODO: Replace with your app's Firebase project configuration
// Make sure your API key and other details are correct.
// The error "auth/api-key-not-valid" means the apiKey below is incorrect.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY", // <-- DOUBLE CHECK THIS VALUE FROM YOUR FIREBASE CONSOLE
  authDomain: "gamblr-nation-5f47b.firebaseapp.com",
  projectId: "gamblr-nation-5f47b",
  storageBucket: "gamblr-nation-5f47b.appspot.com", // Corrected from .firebasestorage.app for consistency with typical config
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: undefined // Use undefined if you don't have one, or paste "YOUR_MEASUREMENT_ID"
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
