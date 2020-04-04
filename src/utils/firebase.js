import firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAqYaPf2Tm018-3hz2mLI4zgPSW66DSzQQ",
    authDomain: "musicfy-leo.firebaseapp.com",
    databaseURL: "https://musicfy-leo.firebaseio.com",
    projectId: "musicfy-leo",
    storageBucket: "musicfy-leo.appspot.com",
    messagingSenderId: "1068203914965",
    appId: "1:1068203914965:web:a432fa6e23e79c5228145c"
  };

export default  firebase.initializeApp(firebaseConfig);