// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDHvKlCbSDmCTeah1YDn1WDWFzxCKPSHk0",
  authDomain: "pwiii-b305d.firebaseapp.com",
  projectId: "pwiii-b305d",
  storageBucket: "pwiii-b305d.firebasestorage.app",
  messagingSenderId: "838654805952",
  appId: "1:838654805952:web:f513f5c8568c642beeaa25"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
