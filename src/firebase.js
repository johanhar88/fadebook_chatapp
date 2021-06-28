import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC6yv4EX1G1oWC-s6sUbtu6AQVWni-nNH8",
    authDomain: "fadebook-a917a.firebaseapp.com",
    projectId: "fadebook-a917a",
    storageBucket: "fadebook-a917a.appspot.com",
    messagingSenderId: "22312546962",
    appId: "1:22312546962:web:bf83b59742a756f27eac4b",
}).auth();
