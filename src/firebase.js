import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcAXb7x177-LtAce6Zf8QDQw0AxBbfa_k",
    authDomain: "fir-f26de.firebaseapp.com",
    projectId: "fir-f26de",
    storageBucket: "fir-f26de.appspot.com",
    messagingSenderId: "1085861640520",
    appId: "1:1085861640520:web:de58c8d5415509821bdb7d",
    measurementId: "G-ECRP9L9JBF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }; 