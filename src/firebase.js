// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBqLMl5c9fq8XyVfKBmjShi9B_EgE9Tz9A",
    authDomain: "clone-36966.firebaseapp.com",
    projectId: "clone-36966",
    storageBucket: "clone-36966.appspot.com",
    messagingSenderId: "170383239048",
    appId: "1:170383239048:web:0263685e3de3a7e4207c3d",
    measurementId: "G-KFVKB15Y0L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth,db};
