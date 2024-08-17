// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcX1Qv7TAGrQ_ofA3rZCadLa6IwVORYiE",
  authDomain: "satisfayingyou-ae0a8.firebaseapp.com",
  projectId: "satisfayingyou-ae0a8",
  storageBucket: "satisfayingyou-ae0a8.appspot.com",
  messagingSenderId: "19101535479",
  appId: "1:19101535479:web:78b0e41b6c552e2eb297f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export {auth_mod}