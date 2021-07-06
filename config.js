import firebase from 'firebase'; 
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCVBVKQ17t9_AfF0R5naJVM6IlXkhpwEP4",
    authDomain: "wily-b7619.firebaseapp.com",
    projectId: "wily-b7619",
    storageBucket: "wily-b7619.appspot.com",
    messagingSenderId: "215875174423",
    appId: "1:215875174423:web:cd18f7f2827f15839d9c52"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()