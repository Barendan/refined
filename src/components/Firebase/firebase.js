import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeAP4cLQhHutxY2DpesloRUmXMZ8yqBeQ",
  authDomain: "refined-f2fb3.firebaseapp.com",
  databaseURL: "https://refined-f2fb3.firebaseio.com",
  projectId: "refined-f2fb3",
  storageBucket: "refined-f2fb3.appspot.com",
  messagingSenderId: "265302517003",
  appId: "1:265302517003:web:c42219ec087e2c5ad66e0e",
  measurementId: "G-691PRR65HD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase