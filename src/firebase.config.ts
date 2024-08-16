import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSN-km2fJVN2y1IIYg3bOqCkfvUGKTcxU',
  authDomain: 'delta-345c9.firebaseapp.com',
  projectId: 'delta-345c9',
  storageBucket: 'delta-345c9.appspot.com',
  messagingSenderId: '598513870071',
  appId: '1:598513870071:web:ee4e7485f1311398589ff2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
