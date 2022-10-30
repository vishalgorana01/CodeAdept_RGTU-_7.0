console.log("Hello, I am emailVerified.js")

import {app} from './firebaseConfig.js';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendSignInLinkToEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";



function currentUser() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(user);
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

currentUser();

let continueBtn = document.querySelector("#section-2_emailVerified .container-2  button");

continueBtn.addEventListener("click", function(){
    document.location.href = "register.html";
})