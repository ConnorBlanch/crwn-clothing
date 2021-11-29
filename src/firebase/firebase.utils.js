import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAP2zYrr-XD_WjZd24lX0GikXuOB7Nk-wk",
  authDomain: "crown-db-bf2ee.firebaseapp.com",
  projectId: "crown-db-bf2ee",
  storageBucket: "crown-db-bf2ee.appspot.com",
  messagingSenderId: "390436456235",
  appId: "1:390436456235:web:0cf4c35f695e7b9313a76e"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;