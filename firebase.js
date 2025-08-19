// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


  const firebaseConfig = {
  apiKey: "AIzaSyA22w78Ran_8At-yIUVIimGvUfx4m2kuJA",
  authDomain: "pwiii-43485.firebaseapp.com",
  projectId: "pwiii-43485",
  storageBucket: "pwiii-43485.firebasestorage.app",
  messagingSenderId: "963594949309",
  appId: "1:963594949309:web:6f6c4eb8b352b6d31e9dd4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
