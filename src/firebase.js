// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyACUWQroiEkTv1b3SJE-JrPPyBo0vdcIKo",
    authDomain: "clone-2cc1c.firebaseapp.com",
    projectId: " clone-2cc1c",
    storageBucket: "clone-2cc1c.appspot.com",
    messagingSenderId: "797517533211",
    appId: "1:797517533211:web:a0b1476d490e9a76d3e8be",
    measurementId: "G-M3Z6NY31CX"
  };
  
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export { db,auth };