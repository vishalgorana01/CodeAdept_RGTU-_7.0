const days = document.getElementById("days");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const currentYear =new Date().getFullYear();

const eventDate= new Date("Novmber 25 2022 00:00:00");

//update countdown
function updateCountdowntime(){

    const currentTime = new Date();
    const diff = eventDate - currentTime;

    const d=Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;
    // console.log(d);
    // console.log(h);
    // console.log(m);
    // console.log(s);

    days.innerHTML =d;
    hour.innerHTML = h<10? '0' + h: h;
    // hour.innerHTML =h;
    // min.innerHTML =m;
    min.innerHTML = m<10? '0' + m: m;
    sec.innerHTML = s<10? '0' + s: s;
    // sec.innerHTML =s;
}
setInterval(updateCountdowntime, 1000);
// updateCountdowntime();

let message = document.querySelector(".contact_form textarea");
let contact_form_input = document.querySelectorAll(".contact_form input");

contact_form_input[0].addEventListener("click", function(){
    // contact_form_input[i].placeholder.style.transiton = "all 0.5s linear";
    // contact_form_input[i].placeholder.style.transform = "translateY(-20px)";
    // contact_form_input[i].placeholder.style.fontSize = "translateY(11px)";

    contact_form_input[0].style.borderBottom = "2px solid #091015";
    contact_form_input[1].style.borderBottom = "1px solid #09101586";
    contact_form_input[2].style.borderBottom = "1px solid #09101586";
    message.style.borderBottom = "1px solid #09101586"
})

contact_form_input[1].addEventListener("click", function(){
    // contact_form_input[i].placeholder.style.transiton = "all 0.5s linear";
    // contact_form_input[i].placeholder.style.transform = "translateY(-20px)";
    // contact_form_input[i].placeholder.style.fontSize = "translateY(11px)";

    contact_form_input[0].style.borderBottom = "1px solid #09101586";
    contact_form_input[1].style.borderBottom = "2px solid #091015";
    contact_form_input[2].style.borderBottom = "1px solid #09101586";
    message.style.borderBottom = "1px solid #09101586"
})

contact_form_input[2].addEventListener("click", function(){
    // contact_form_input[i].placeholder.style.transiton = "all 0.5s linear";
    // contact_form_input[i].placeholder.style.transform = "translateY(-20px)";
    // contact_form_input[i].placeholder.style.fontSize = "translateY(11px)";

    contact_form_input[0].style.borderBottom = "1px solid #09101586";
    contact_form_input[1].style.borderBottom = "1px solid #09101586";
    contact_form_input[2].style.borderBottom = "2px solid #091015";
    message.style.borderBottom = "1px solid #09101586"
})




message.addEventListener("click", function(){
    message.style.borderBottom = "2px solid #091015"
    contact_form_input[0].style.borderBottom = "1px solid #09101586";
    contact_form_input[1].style.borderBottom = "1px solid #09101586";
    contact_form_input[2].style.borderBottom = "1px solid #09101586";
})