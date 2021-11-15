import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});


function login(){
      const userEmail = document.getElementById("login_email").value;
      const userPassword = document.getElementById("login_password").value;

      window.alert( userEmail + " " + userPassword);
  }