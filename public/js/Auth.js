// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getDatabase, ref, set  } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
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

// const storageRef = ref(storage, 'images/menu-1.png');
const analytics = getAnalytics(app);
const auth = getAuth(app);
const user = auth.currentUser;
const db = getDatabase();
// export default firebaseConfig.firestore();


export function signUp_function() {
  var email = document.querySelector("#signup-email").value; //email input from register.html
  var password = document.querySelector("#signup-password").value; //password input from register.html
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => { //catching fuction(s) error(s)
    const errorMessage = error.message;
    document.getElementById('error-message').innerHTML = errorMessage;
  });
}

 function uploadPhotos() {
  var UserImage = document.getElementsId("ProfilePicture").file;
  uploadBytes(storageRef, UserImage).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
}


export function logIn_function(){
  var email = document.querySelector("#login-email").value;
  var password = document.querySelector("#login-password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => { 
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('error-message').innerHTML = errorMessage;
  });

  
}

export function writeUserData(uid, name, email) {
  
  set(ref(db, 'users/' + uid), {
    username : name,
    email : email
  });
}

// export function UpdateProfile_function(){
  
//   const [username, setUsnername] = useState("username");
//   const [lastname, setlastname] = useState("lastname");
//   const adduser = (Object) => {
//     const ref = firestore.collection("LongmonData");
//     ref
//     .add(Object)
//     .then (() => {
//       console.log("add Successfully");
//     })
//     .catch ((err) => console.log(err));
//   };
//   const submit = (e) => {
//     e.perventDefault();
//     const Object ={
//       username : username,
//       lastname : lastname
//     };
//     setUsnername("");
//     setlastname("");
//     adduser(Object);
//   }
 /* updateProfile(auth.currentUser, {
    displayName: register_name + register_lastname, photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then(() => {
    // Profile updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });*/


  onAuthStateChanged(auth, (user) => {
    if (user) {
      // window.location.replace("https://projectlongmon.web.app/");
      //window.location.replace("https://projectlongmon.web.app/register.html");
      document.getElementById("signUpForm").style.display = "none";
      document.getElementById("upDateUserForm").style.display = "block";
      document.getElementById("SignUp-Text").style.display = "none";
      document.getElementById("SettingAcc-Text").style.display = "block";
      // if (user == null) {
      //   // The user object has basic properties such as display name, email, etc.
        
        
      //   // const photoURL = user.photoURL;
      //   // const emailVerified = user.emailVerified;
        
        
        
      
      //   // The user's ID, unique to the Firebase project. Do NOT use
      //   // this value to authenticate with your backend server, if
      //   // you have one. Use User.getToken() instead.
      // }
      // if (user !== null) { 
      //   const displayName = user.displayName;
      //   const email = user.email;
      //   const uid = user.uid;
      //   console.log(uid, displayName, email);
      // }
      
    } else {
      // User is signed out
      // ...
    }
  });


