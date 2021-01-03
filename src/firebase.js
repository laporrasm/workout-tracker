import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCS76EDWPKwRbLsQW1nIp02UJs4hjjeDwQ',
  authDomain: 'workout-tracker-ffb00.firebaseapp.com',
  projectId: 'workout-tracker-ffb00',
  storageBucket: 'workout-tracker-ffb00.appspot.com',
  messagingSenderId: '55639282661',
  appId: '1:55639282661:web:5e60bb0eb0cdb2909fd50c',
  measurementId: 'G-KGF4C4F8ST',
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const exercisesCollection = db.collection('exercises');

// export utils/refs
export {
  db,
  auth,
  exercisesCollection,
};
