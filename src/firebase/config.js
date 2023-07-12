//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
//import 'firebase/firebase-app'
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDVvhMTuufgpb6bCASmUhRut9RSz56IB3Y",
  authDomain: "olx-clone-eeba3.firebaseapp.com",
  projectId: "olx-clone-eeba3",
  storageBucket: "olx-clone-eeba3.appspot.com",
  messagingSenderId: "845548289368",
  appId: "1:845548289368:web:91b066f18db9d6cf60792d",
  measurementId: "G-SQNEE8WZ86",
};

export default firebase.initializeApp(firebaseConfig);
