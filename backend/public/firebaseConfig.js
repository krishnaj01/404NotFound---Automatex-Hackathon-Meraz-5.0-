import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsGrmq7ATvXP4QS_dCPukNUeZSEJ4SdUo",
    authDomain: "lost-found-iitbhilai-a099c.firebaseapp.com",
    projectId: "lost-found-iitbhilai-a099c",
    storageBucket: "lost-found-iitbhilai-a099c.firebasestorage.app",
    messagingSenderId: "169751245523",
    appId: "1:169751245523:web:37483871e09f06a2dd1a26"
  };

// module.exports = firebase.firestore();
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);