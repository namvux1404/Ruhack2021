import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBufXG3sNpEh4LLTcPIjdF_B5ZZnZNWYdY",
    authDomain: "ruhack2021.firebaseapp.com",
    projectId: "ruhack2021",
    storageBucket: "ruhack2021.appspot.com",
    messagingSenderId: "395262765614",
    appId: "1:395262765614:web:0dd02ef66e019a5b18cdbf",
    measurementId: "G-C9L28XM53Y"
  };

  //initialise Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;