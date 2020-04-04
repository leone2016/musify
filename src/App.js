import React from 'react';
import './App.css';
import firebase from "./utils/Firebase";
import "firebase/auth";

function App() {
  firebase.auth().onAuthStateChanged(currentUser => {
    console.log(currentUser? "Estamos logeados": "No estamos logeados");
  })
  return (
    <div className="App">
     <h1>App Electron + React </h1> 
    </div>
  );
}

export default App;
