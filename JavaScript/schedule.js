console.log("This is Shedule.js");

let speaker1 = document.querySelector(".speaker1");
let speakerDetails1 = document.querySelector(".speakerDetails1")
let close1 = document.querySelector(".speakerDetails1 .cross")

speaker1.addEventListener("click", function(){
    speakerDetails1.style.display = "flex";
});

close1.addEventListener("click", function(){
    speakerDetails1.style.display = "none";
});

let speaker2 = document.querySelector(".speaker2");
let speakerDetails2 = document.querySelector(".speakerDetails2")
let close2 = document.querySelector(".speakerDetails2 .cross")

speaker2.addEventListener("click", function(){
    speakerDetails2.style.display = "flex";
});

close2.addEventListener("click", function(){
    speakerDetails2.style.display = "none";
});