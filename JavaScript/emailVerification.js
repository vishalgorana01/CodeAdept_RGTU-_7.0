console.log("Hello, I am emailVerification.js");

import { app } from './firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendSignInLinkToEmail, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

// console.log(app);

const auth = getAuth();
console.log(auth.currentUser);


let sendBtn = document.querySelector("#section-2_emailVerification .container-2 form button");

sendBtn.addEventListener("click", function () {
    console.log("hi");
})

function signUp() {

    let email = document.querySelector("#section-2_emailVerification .container-2 form input").value;
    let password = "codeadept6.0";

    sessionStorage.setItem("current_email", email);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("successfully signup")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(error);
        });
}


function signin() {
    let email = document.querySelector("#section-2_emailVerification .container-2 form input").value;
    let password = "codeadept6.0";
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            alert("successfull sigiin")
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            alert(error)
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}


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


sendBtn.addEventListener("click", function () {

    signUp();

    setTimeout(() => {
        signin();
    }, 2000);
    // document.location.href = "register.html";
    setTimeout(() => {
        verification();
    }, 2000);
})

async function verification() {
    const auth = await getAuth();
    console.log(auth.currentUser);
    sendEmailVerification(auth.currentUser)
        .then(() => {
            // Email verification sent!
            // ...
            alert("email verification sent")
        })
        .catch((error) => {
            alert(error);
        });
}