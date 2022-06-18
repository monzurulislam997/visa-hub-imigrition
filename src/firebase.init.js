// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwrnjdKn_GV4PfxbeebRX2dJUjADxO8ts",
    authDomain: "visa-hub-imigrition.firebaseapp.com",
    projectId: "visa-hub-imigrition",
    storageBucket: "visa-hub-imigrition.appspot.com",
    messagingSenderId: "351202333806",
    appId: "1:351202333806:web:13711ce4ef50ee2716027f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;