import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";




  

  
  var firebaseConfig = {
    apiKey: "AIzaSyAR-58Akh3GVSqzfVnZJMyq74BCrpSGY2k",
    authDomain: "befit-bfcd7.firebaseapp.com",
    projectId: "befit-bfcd7",
    storageBucket: "befit-bfcd7.appspot.com",
    messagingSenderId: "824659853758",
    appId: "1:824659853758:web:daf4bbc0e0854e1bdcb9ef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  export{
      firebase, db
  };
