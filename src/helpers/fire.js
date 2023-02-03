import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKzZJhGNEHdmkLrXbGgWEO8Dxur0BBUWE",
  authDomain: "auth-93b71.firebaseapp.com",
  projectId: "auth-93b71",
  storageBucket: "auth-93b71.appspot.com",
  messagingSenderId: "353166764360",
  appId: "1:353166764360:web:f27e4c5e552d2572b0ab7d",
  measurementId: "G-EHYMT8RD2Y",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
