import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDA3WrwSKC4xcdo_vChzot8vwqf42RyQms",
  authDomain: "prestapago-f1918.firebaseapp.com",
  databaseURL: "https://prestapago-f1918.firebaseio.com",
  projectId: "prestapago-f1918",
  storageBucket: "prestapago-f1918.appspot.com",
  messagingSenderId: "421738961093",
  appId: "1:421738961093:web:e6c0694fa1fa7b27"
};

firebase.initializeApp(config);

export default firebase;
