import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXctVL7dMXr4i_s2EqIsAzAwT4ftNRDH4",
  authDomain: "metube-clone-12.firebaseapp.com",
  projectId: "metube-clone-12",
  storageBucket: "metube-clone-12.appspot.com",
  messagingSenderId: "345587851420",
  appId: "1:345587851420:web:31999b78aa46762fc88d59",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
