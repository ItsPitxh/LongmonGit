
var firebaseui = require('firebaseui');


// const auth = firebase.auth();

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  // Other config options...
});

function register() {
  var email = document.querySelector("#signup-email").value;
  var password = document.querySelector("#signup-password").value;
  auth.createUserWithEmailAndPassword(email, password).then(function(user) {
       var user = firebase.auth().currentUser;
       console.log(user); // Optional
    }, function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;

       window.alert(errorMessage)
    });
}

function login(){
  var email = document.getElementById("login_email").value;
  var password = document.getElementsById("login_password").value;

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed Up" + email);
        
    
}