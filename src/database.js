// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAVwLow37zxnY-GFDGJKWxUI0V96CQxNa8",
  authDomain: "case-6b041.firebaseapp.com",
  databaseURL: "https://case-6b041.firebaseio.com",
  projectId: "case-6b041",
  storageBucket: "case-6b041.appspot.com",
  messagingSenderId: "30440097345",
  appId: "1:30440097345:web:8d0e4ec0d47e660e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.firestore();

export default database;