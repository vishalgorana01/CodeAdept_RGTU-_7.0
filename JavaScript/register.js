
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

import { getDatabase, ref, child, push, update, set, get } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// function writeUserData(firstName, lastName, emailId, enrollmentNo, branch, University_College, contactNo, previousSkills) {
//     // const db = getDatabase();

//     // // A post entry.
//     const registerUsersData = {

//     };

//     // // Get a key for a new Post.
//     // const newPostKey = push(child(ref(db), 'registerUsers')).key;
//     // // console.log(newPostKey);

//     // // Write the new post's data simultaneously in the posts list and the user's post list.
//     // const updates = {};
//     // updates['/registerUsers/' + newPostKey] = registerUsersData;
//     // // updates['/registerUsers/' + newPostKey + '/'] = registerUsersData;

//     // return update(ref(db), updates);


// }

function writeUserData(firstName, lastName, emailId, enrollmentNo, branch, University_College, contactNo, previousSkills) {
    const db = getDatabase();
    const postListRef = ref(db, 'registeredUsers');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        enrollmentNo: enrollmentNo,
        branch: branch,
        University_College: University_College,
        contactNo: contactNo,
        previousSkills: previousSkills
    });
}

var check9 = true;
function getData() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `registeredUsers/`)).then((snapshot) => {
        if (snapshot.exists()) {
            for (let i in snapshot.val()) {
                get(child(dbRef, `registeredUsers/${i}`)).then((ans) => {
                    let currentEmailId = document.getElementById("emailId").children[0].value;
                    if (currentEmailId == ans.val().emailId) {
                        alert("This email is already registered");
                        check9 = false;
                        // return false;
                    }
                })
            }
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.log(error);
    });
}

function sendEmail() {
    let emailId = document.getElementById("emailId").children[0].value;
    console.log(emailId);
    console.log("run");
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "abcxyz51423@gmail.com",
        Password: "8DF40FCD1BB5390530BD797BF7C5C1BBEBD3",
        To: `${emailId}`,
        From: "abcxyz51423@gmail.com",
        Subject: "CodeAdept 6.0 Registration",
        Body: "Your are successfully registered for CodeAdept 6.0 !",
    }).then(
        message => alert(message)
    )
        .catch((error) => {
            console.log(error);
        })
}


let successModal = document.querySelector(".registration_success_modal");

let submit_btn = document.getElementById("submit_btn");
submit_btn.addEventListener("click", function () {
    check9 = true;
    getData();

    let firstName = document.querySelector("#firstName").children[0].value;
    console.log(firstName);

    let check1 = false;

    if (firstName == '') {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #firstName::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
    }
    else {
        check1 = true;
    }

    document.getElementById("firstName").addEventListener("click", () => {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #firstName::after{
           content: "";
          }
         </style>
      `);
    })

    let lastName = document.getElementById("lastName").children[0].value;
    console.log(lastName);

    let check2 = false;

    if (lastName == '') {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #lastName::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
    }
    else {
        check2 = true;
    }

    document.getElementById("lastName").addEventListener("click", () => {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #lastName::after{
           content: "";
          }
         </style>
      `);
    })

    let emailId = document.getElementById("emailId").children[0].value;
    console.log(emailId);

    let check3 = false;

    if (emailId == '') {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #emailId::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
    }
    else if (!emailId.includes("@gmail.com")) {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #emailId::after{
           content: "*invalid email ID";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
    }
    else {
        check3 = true;
    }

    document.getElementById("emailId").addEventListener("click", () => {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #emailId::after{
           content: "";
          }
         </style>
      `);
    })

    let semester = document.getElementById("semester").children[0].value;
    console.log(semester);

    let check4 = false;

    if (semester == '') {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #semester::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
    }
    else {
        check4 = true;
    }

    document.getElementById("enrollmentNo").addEventListener("click", () => {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #enrollmentNo::after{
           content: "";
          }
         </style>
      `);
    })

    let branch = document.getElementById("branch").children[0].value;
    console.log(branch);

    let check5 = false;

    if (branch == '') {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #branch::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
    }
    else {
        check5 = true;
    }

    document.getElementById("branch").addEventListener("click", () => {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #branch::after{
           content: "";
          }
         </style>
      `);
    })

    let University_College = document.getElementById("University_College").children[0].value;
    console.log(University_College);

    let check6 = false;

    if (University_College == '') {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #University_College::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
    }
    else {
        check6 = true;
    }

    document.getElementById("University_College").addEventListener("click", () => {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #University_College::after{
           content: "";
          }
         </style>
      `);
    })

    let contactNo = document.getElementById("contactNo").children[0].value;
    console.log(contactNo);

    let check7 = false;

    if (contactNo == '') {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #contactNo::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
    }
    else if (contactNo.length != 10) {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #contactNo::after{
             content : "*invalid phoneNo";
          }
        </style>
        `);
    }
    else {
        check7 = true;
    }

    document.getElementById("contactNo").addEventListener("click", () => {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #contactNo::after{
           content: "";
          }
         </style>
      `);
    })

    let previousSkills = document.getElementById("previousSkills").children[0].value;
    console.log(previousSkills);

    let check8 = false;

    if (previousSkills == '') {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #previousSkills::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
    }
    else {
        check8 = true;
    }

    document.getElementById("previousSkills").addEventListener("click", () => {
        document.head.insertAdjacentHTML("beforeend", `
        <style>
          #previousSkills::after{
           content: "";
          }
         </style>
      `);
    })

    // getData();
    setTimeout(() => {
        if (check1 == true && check2 == true && check3 == true && check4 == true && check5 == true && check6 == true && check7 == true && check8 == true && check9 == true) {
            writeUserData(firstName, lastName, emailId, enrollmentNo, branch, University_College, contactNo, previousSkills);
            sendEmail();
            successModal.style.display = "block !important";
            // alert("Form Submitted");
        }
        else {
            successModal.style.display = "none !imortant";
            alert("Not Submitted");
        }
    }, 2000);

    // getData();
    // sendData();
    // sendEmail();
})



