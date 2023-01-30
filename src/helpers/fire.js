import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgSXJ0RISrvjgVabTfxL_jZU4pv2Z8N9g",
  authDomain: "hackathon-42f32.firebaseapp.com",
  projectId: "hackathon-42f32",
  storageBucket: "hackathon-42f32.appspot.com",
  messagingSenderId: "209980263669",
  appId: "1:209980263669:web:92024f6e699e97d5b609bc",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
