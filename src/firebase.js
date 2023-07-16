import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_7NG6pxpJenw2lRnkZSNL2tPmykX4ERQ",
    authDomain: "netflix-7b85b.firebaseapp.com",
    projectId: "netflix-7b85b",
    storageBucket: "netflix-7b85b.appspot.com",
    messagingSenderId: "345257130496",
    appId: "1:345257130496:web:17f2cf390cb4fcfd8bf6e5",
    measurementId: "G-DGXB7SPP4C"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;