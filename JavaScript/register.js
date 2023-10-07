
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: "AIzaSyBRBHtszcovM8QQb7RxqU8lkmANjAIn6uc", 
  authDomain: "codeadept2023.firebaseapp.com", 
  projectId: "codeadept2023", 
  storageBucket: "codeadept2023.appspot.com", 
  messagingSenderId: "454622602321", 
  appId: "1:454622602321:web:bbdf33889cd5489d64c470", 
  measurementId: "G-1GSY8Y5JBC" 
}; 

export const app = initializeApp(firebaseConfig);

import { getDatabase, ref, child, push, update, set, get } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

let allRegisteredEmails = [];

var check9 = true;
// // function getData() {
//   const dbRef = ref(getDatabase());
//   get(child(dbRef, `registeredStudents/`)).then((snapshot) => {
//     if (snapshot.exists()) {
//       for (let i in snapshot.val()) {
//         get(child(dbRef, `registeredStudents/${i}`)).then((ans) => {
//           allRegisteredEmails.push(ans.val().emailId);
//           let currentEmailId = document.getElementById("emailId").children[0].value;
//           if (currentEmailId == ans.val().emailId) {
//             // alert("This email is already registered");
//   // document.querySelector(".spinnerDiv").classList.add("d-none");

//             // swal("OOPS", "This email is already registered!", "warning");
//             check9 = false;
//             // return false;
//           }
//         })
//       }
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     alert(error);
//   });
// // }

console.log(allRegisteredEmails);

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
  const postListRef = ref(db, 'registeredStudents');
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
  })

  document.querySelector(".spinnerDiv").classList.remove("d-none");
}



function sendEmail() {
  let registeredPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let a = 7;
      document.querySelector(".spinnerDiv").classList.add("d-none");
      swal("Registration Successfull !", "You will recieve mail within 2 days. Don't forget to check SPAM Folder!", "success")
      resolve(7);

    }, 2000);
  })

  // }</style><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i &subset=cyrillic,latin-ext" data-name="open_sans" rel="stylesheet" type="text/css"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css"></head><body style="padding:0; margin: 0;background: #363942"><table style="height: 100%; width: 100%; background-color: #363942;" align="center"><tbody><tr><td valign="top" id="dbody" data-version="2.31" style="width: 100%; height: 100%; padding-top: 8px; padding-bottom: 8px; background-color: #363942;"><!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:602px" width="602" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><table class="layer_1" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; box-sizing: border-box; width: 100%; margin: 0px auto;"><tbody><tr><td class="drow" valign="top" align="center" style="box-sizing: border-box; font-size: 0px; text-align: center; background-color: #000000;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%"><tbody><tr><td valign="top" class="emptycell" style="padding: 16px;"></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr><tr><td class="drow" valign="top" align="center" style="box-sizing: border-box; font-size: 0px; text-align: center; background-color: #000000;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%"><tbody><tr><td valign="top" class="edimg" style="padding: 10px; box-sizing: border-box; text-align: center;"><img src="https://api.smtprelay.co/userfile/5f058c1c-43f4-4957-8799-2edc881a040b/logo2.png" alt="Image" style="border-width: 0px; border-style: none; max-width: 122px; width: 100%;" width="122"></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr><tr><td class="drow" valign="top" align="center" style="box-sizing: border-box; font-size: 0px; text-align: center; background-color: #000000;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%"><tbody><tr><td valign="top" class="edtext" style="padding: 10px; text-align: left; color: #d3d3d3; font-size: 12px; font-family: Verdana, Geneva, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"><p class="text-center" style="text-align: center; margin: 0px; padding: 0px;"><strong><span style="font-size: 30px;">CodeAdept 6.0</span></strong></p></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr><tr><td class="drow" valign="top" align="center" style="box-sizing: border-box; font-size: 0px; text-align: center; background-color: #000000;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%"><tbody><tr><td valign="top" class="edtext" style="padding: 10px; text-align: left; color: #d3d3d3; font-size: 12px; font-family: Verdana, Geneva, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"><p class="style1 text-center" style="line-height: 1.5em; text-align: center; margin: 0px; padding: 0px; color: #ffffff; font-size: 44px; font-family: Impact, Charcoal, sans-serif;"><span style="font-size: 24px;">Congratulations !</span></p>
  // <p style="margin: 0px; padding: 0px;"><span style="color: #ffffff;">Team CodeAdept.</span></p></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr><tr><td class="drow" valign="top" align="center" style="box-sizing: border-box; font-size: 0px; text-align: center; background-color: #000000;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%"><tbody><tr><td valign="top" class="emptycell" style="padding: 10px;"></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr><tr><td class="drow" valign="top" align="center" style="box-sizing: border-box; font-size: 0px; text-align: center; background-color: #000000;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%"><tbody><tr><td valign="top" class="edsocialfollow" style="padding: 10px;"><table align="center" style="margin: 0px auto;" class="edsocialfollowcontainer" cellpadding="0" border="0" cellspacing="0"><tbody><tr><td><!--[if mso]><table align="center" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" valign="top"><![endif]--><table align="left" border="0" cellpadding="0" cellspacing="0" data-service="linkedin"><tbody><tr><td align="center" valign="middle" style="padding: 5px;"><a href="https://www.linkedin.com/showcase/codeadept/" target="_blank" style="color: #ffffff; font-size: 12px; font-family: Verdana, Geneva, sans-serif;"><img src="https://api.etrck.com/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/ro_sol_co_32_linkedin.png" style="display: block; width: 100%; max-width: 32px; border: none;" alt="Linkedin" width="32"></a></td></tr></tbody></table><!--[if mso]></td><td align="center" valign="top"><![endif]--><table align="left" border="0" cellpadding="0" cellspacing="0" data-service="instagram"><tbody><tr><td align="center" valign="middle" style="padding: 5px;"><a href="https://instagram.com/" target="_blank" style="color: #ffffff; font-size: 12px; font-family: Verdana, Geneva, sans-serif;"><img src="https://api.etrck.com/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/ro_sol_co_32_instagram.png" style="display: block; width: 100%; max-width: 32px; border: none;" alt="Instagram" width="32"></a></td></tr></tbody></table><!--[if mso]></td><td align="center" valign="top"><![endif]--><table align="left" border="0" cellpadding="0" cellspacing="0" data-service="link"><tbody><tr><td align="center" valign="middle" style="padding: 5px;"><a href="http://www.codeadept.live" target="_blank" style="color: #ffffff; font-size: 12px; font-family: Verdana, Geneva, sans-serif;"><img src="https://api.etrck.com/userfile/a18de9fc-4724-42f2-b203-4992ceddc1de/ro_sol_co_32_link.png" style="display: block; width: 100%; max-width: 32px; border: none;" alt="Website" width="32"></a></td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr><tr><td class="drow" valign="top" align="center" style="box-sizing: border-box; font-size: 0px; text-align: center; background-color: #000000;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;"><table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%"><tbody><tr><td valign="top" class="edtext" style="padding: 48px; text-align: left; color: #d3d3d3; font-size: 12px; font-family: Verdana, Geneva, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"><p class="text-center" style="text-align: center; margin: 0px; padding: 0px;"><span style="font-size: 12px; color: #ffffff;"><a href="{view}" target="_blank" style="color: #ffffff; text-decoration: none;">Read online</a>&nbsp; &nbsp; |&nbsp; &nbsp; <a href="{unsubscribe}" style="color: #ffffff; text-decoration: none;">Unsubscribe</a></span></p></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table></body></html>
  //         `,
  //   }).then(
  //     message => {
  //   console.log("then");
  //     document.querySelector(".spinnerDiv").classList.add("d-none");
  //       swal("Registration Successfull !", "You will recieve mail within 2 days. Don't forget to check SPAM Folder!", "success");}
  //   )
  //     .catch((error) => {
  //   // document.querySelector(".spinnerDiv").classList.add("d-none");
  //   console.log("catch");
  //   document.querySelector(".spinnerDiv").classList.add("d-none");
  //   swal("Registration Successfull !", "You will recieve mail within 2 days. Don't forget to check SPAM Folder !", "success");



  //       console.log(error);
  //     })
}


// ********** add event listener submit **********
submit_btn.addEventListener("click", function () {
  // document.querySelector(".spinnerDiv").classList.remove("d-none");

  check9 = true;

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

  document.getElementById("semester").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #semester::after{
           content: "";
          }
         </style>
      `);
  })

  let branch = document.getElementById("branch").children[0].value;
  console.log(branch);

  let check5 = false;

  if (branch == 'Select Branch') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #branch{
            position: relative;
          }

          #branch::after{
           content: "*Branch is not selected";
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

  let graduationYear = document.getElementById("year_of_graduation").children[0].value;
  console.log(branch);

  if (graduationYear == 'Select Graduation Year') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #year_of_graduation{
            position: relative;
          }

          #year_of_graduation::after{
           content: "*Graduation year is not selected";
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

  document.getElementById("year_of_graduation").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #year_of_graduation::after{
           content: "";
          }
         </style>
      `);
  })

  let enrollmentNo = document.getElementById("enrollmentNo").children[0].value;
  console.log(enrollmentNo);

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
    if (check1 == true && check2 == true && check3 == true && check4 == true && check5 == true && check6 == true && check7 == true && check8 == true) {
      document.querySelector(".spinnerDiv").classList.remove("d-none");
      writeUserData(firstName, lastName, emailId, enrollmentNo, branch, University_College, contactNo, previousSkills);
      sendEmail();
    }
    else {
      document.querySelector(".spinnerDiv").classList.add("d-none");
    }
  }, 200);
})



