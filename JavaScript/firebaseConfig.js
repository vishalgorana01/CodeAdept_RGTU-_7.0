import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCr7Lx_UdaHku6JTV5B_uekdqnFXLKi-Bc",
    authDomain: "codeadept2022.firebaseapp.com",
    databaseURL: "https://codeadept2022-default-rtdb.firebaseio.com",
    projectId: "codeadept2022",
    storageBucket: "codeadept2022.appspot.com",
    messagingSenderId: "953883757907",
    appId: "1:953883757907:web:649da32272215e2a06e5a6"
};

export const app = initializeApp(firebaseConfig);