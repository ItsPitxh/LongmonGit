// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBimKQ9uh2nmMMQLsk5Xl60m-O07d23wnw",
  authDomain: "projectlongmon.firebaseapp.com",
  databaseURL: "https://projectlongmon-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projectlongmon",
  storageBucket: "projectlongmon.appspot.com",
  messagingSenderId: "453457350228",
  appId: "1:453457350228:web:e39c0f390516382b9ba7c1",
  measurementId: "G-S17KNGMLHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const user = auth.currentUser;


export function signUp_function() {
  var email = document.querySelector("#signup-email").value; //email input from register.html
  var password = document.querySelector("#signup-password").value; //password input from register.html
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    location.href = "login.html";
    // ...
  })
  .catch((error) => { //catching fuction(s) error(s)
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  });
}

export function logIn_function(){
  var email = document.getElementById("login_email").value;
  var password = document.getElementsById("login_password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  });   
}