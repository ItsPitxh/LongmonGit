import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp(firebaseConfig);


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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

// Initialize Firebase
// var app = firebase.initializeApp(firebaseConfig);



// document.addEventListener('DOMContentLoaded', function() {
    //  const loadEl = document.querySelector('#load');
    //  try {
    //    let app = firebase.app();
    //    let features = [
        //  'auth',
        //  'database',
        //  'firestore',
        //  'functions',
        //  'messaging',
        //  'storage',
        //  'analytics',
        //  'remoteConfig',
        //  'performance',
    //    ].filter(feature => typeof app[feature] === 'function');
    //    loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
    //  } catch (e) {
    //    console.error(e);
    //    loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
    //  }
//    });

let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () =>{
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
