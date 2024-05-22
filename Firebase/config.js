// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOfATD5spsfMMocgWp0bQPUJEZrvym_ek",
  authDomain: "simply-project-afa95.firebaseapp.com",
  projectId: "simply-project-afa95",
  storageBucket: "simply-project-afa95.appspot.com",
  messagingSenderId: "26918305325",
  appId: "1:26918305325:web:83d242ae646af7252ec2a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };