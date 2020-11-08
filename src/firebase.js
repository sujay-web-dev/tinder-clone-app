import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBa_vV8oX_tHyTayZHJShqj6TypwSPPd5I",
    authDomain: "sujay-sinder.firebaseapp.com",
    databaseURL: "https://sujay-sinder.firebaseio.com",
    projectId: "sujay-sinder",
    storageBucket: "sujay-sinder.appspot.com",
    messagingSenderId: "225529220750",
    appId: "1:225529220750:web:579873571784ab73d1c3df",
    measurementId: "G-5Z2VN9F655"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;