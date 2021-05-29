// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDshlo23z7EgmgQSwlI7CzHsp51PwoIkaU",
  authDomain: "clone-6cdf3.firebaseapp.com",
  projectId: "clone-6cdf3",
  storageBucket: "clone-6cdf3.appspot.com",
  messagingSenderId: "200367866945",
  appId: "1:200367866945:web:51470694cb8fc1865f32c0",
  measurementId: "G-MQQVBEMGR0"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }; 