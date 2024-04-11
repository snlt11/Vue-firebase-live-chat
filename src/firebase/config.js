import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4go5OOq7RRTIDLZjGxVx-1bw8YVtXJsE",
  authDomain: "vue-project-218b0.firebaseapp.com",
  projectId: "vue-project-218b0",
  storageBucket: "vue-project-218b0.appspot.com",
  messagingSenderId: "883830102257",
  appId: "1:883830102257:web:9d2255ced0c615b0c23150",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, auth, timestamp };
