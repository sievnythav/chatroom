import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAu_viiS1ewV81pr6YECc9494LQhrjiQv4",
    authDomain: "ninja-chat-371e7.firebaseapp.com",
    databaseURL: "https://ninja-chat-371e7.firebaseio.com",
    projectId: "ninja-chat-371e7",
    storageBucket: "ninja-chat-371e7.appspot.com",
    messagingSenderId: "436281660155",
    appId: "1:436281660155:web:ae480b0ebfbe6454a2565e",
    measurementId: "G-7KTDBL6SJ5"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()