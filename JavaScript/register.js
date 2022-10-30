
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

// import { getDatabase, ref, child, push, update } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

// function writeUserData(firstName, lastName, emailId, enrollmentNo, branch, University_College, contactNo, previousSkills){
//     const db = getDatabase();

//     // A post entry.
//     const registerUsersData = {
//         firstName: firstName,
//         // uid: uid,
//         lastName: lastName,
//         emailId: emailId,
//         enrollmentNo: enrollmentNo,
//         branch: branch,
//         University_College: University_College,
//         contactNo: contactNo,
//         previousSkills: previousSkills
//     };

//     // Get a key for a new Post.
//     const newPostKey = push(child(ref(db), 'registerUsers')).key;
//     // console.log(newPostKey);

//     // Write the new post's data simultaneously in the posts list and the user's post list.
//     const updates = {};
//     updates['/registerUsers/' + newPostKey] = registerUsersData;
//     // updates['/registerUsers/' + newPostKey + '/'] = registerUsersData;

//     return update(ref(db), updates);
// }

// let submit_btn = document.getElementById("submit_btn");
// submit_btn.addEventListener("click", function () {
//     let firstName = document.querySelector("#firstName").children[0].value;
//     console.log(firstName);

//     let lastName = document.getElementById("lastName").children[0].value;
//     console.log(lastName);

//     let emailId = document.getElementById("emailId").children[0].value;
//     console.log(emailId);

//     let enrollmentNo = document.getElementById("enrollmentNo").children[0].value;
//     console.log(enrollmentNo);

//     let branch = document.getElementById("branch").children[0].value;
//     console.log(branch);

//     let University_College = document.getElementById("University_College").children[0].value;
//     console.log(University_College);

//     let contactNo = document.getElementById("contactNo").children[0].value;
//     console.log(contactNo);

//     let previousSkills = document.getElementById("previousSkills").children[0].value;
//     console.log(previousSkills);

//     writeUserData(firstName, lastName, emailId, enrollmentNo, branch, University_College, contactNo, previousSkills);

// })

// const db = getDatabase();
// set(ref(db, 'users/' + userId), {
//   username: name,
//   email: email,
//   profile_picture : imageUrl
// })
// .then(() => {
//   // Data saved successfully!
// })
// .catch((error) => {
//   // The write failed...
// });

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function signUp() {

    let email = document.querySelector(".inputdiv input").value;
    let password = "codeadept6.0";
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


function signin(email, password){
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}



let submitBtn = document.querySelector(".inputdiv button");

submitBtn.addEventListener("click", function () {

    signUp();

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
        .catch((error)=>{
            alert(error);
        });
}