console.log("hello, This is team page");

let card = document.querySelectorAll(".card");



for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover", function () {
        card[i].children[1].style.transition = "all 0.4s";
        card[i].children[1].style.transform = "translateX(0%)";

        card[i].children[2].children[0].style.transition = "all 0.4s";
        card[i].children[2].children[0].style.opacity = "0.5";

        card[i].children[2].children[1].style.transition = "all 0.4s";
        card[i].children[2].children[1].style.opacity = "0.5";

        card[i].children[2].children[2].style.transition = "all 0.4s";
        card[i].children[2].children[2].style.opacity = "0.5";

        card[i].children[2].children[3].style.transition = "all 0.4s";
        card[i].children[2].children[3].style.opacity = "0.5";


        card[i].children[4].style.transition = "all 0.4s";
        card[i].children[4].style.transform = "translateX(0%)";
    })

    for(let j=0; j<card[i].children[2].childElementCount; j++){
        card[i].children[2].children[j].addEventListener("mouseenter", function(){
            card[i].children[2].children[j].style.opacity = "1";
            console.log("span")
        })

        card[i].children[2].children[j].addEventListener("mouseleave", function(){
            card[i].children[2].children[j].style.opacity = "0.5";
        })
    }

}

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseleave", function () {
        card[i].children[1].style.transition = "all 0.4s";
        card[i].children[1].style.transform = "translateX(200%)";

        card[i].children[2].children[0].style.transition = "all 0.4s";
        card[i].children[2].children[0].style.opacity = "0";

        card[i].children[2].children[1].style.transition = "all 0.4s";
        card[i].children[2].children[1].style.opacity = "0";

        card[i].children[2].children[2].style.transition = "all 0.4s";
        card[i].children[2].children[2].style.opacity = "0";

        card[i].children[2].children[3].style.transition = "all 0.4s";
        card[i].children[2].children[3].style.opacity = "0";


        card[i].children[4].style.transition = "all 0.4s";
        card[i].children[4].style.transform = "translateX(-100%)";
    });

}

// **********************************************************************************

// let card = document.querySelectorAll(".card");

// for(let i=0; i<card.length; i++){
//     card[i].addEventListener("mouseover", function(){
//         // card[i].style.transition = "all 2s linear";
//         // card[i].style.height = "400px";
//         card[i].children[0].style.transition = "all 0.4s";
//         card[i].children[0].style.transform = "translateY(0%)";

//         card[i].children[1].style.border = "6px solid #287ab9";

//         card[i].children[3].style.transition = "all 0.4s";
//         card[i].children[3].style.transform = "translateY(0%)";
//     })

//     for(let j=0; j<card[i].children[3].children[0].childElementCount; j++){
//         card[i].children[3].children[0].children[j].addEventListener("mouseover", function(){
//             card[i].children[3].children[0].children[j].style.backgroundColor = "white";
//             card[i].children[3].children[0].children[j].children[0].style.color = "#2274C5";
//         });

//         card[i].children[3].children[0].children[j].addEventListener("mouseleave", function(){
//             card[i].children[3].children[0].children[j].style.backgroundColor = "#2274c5";
//             card[i].children[3].children[0].children[j].children[0].style.color = "white";
//         });
//     }

//     card[i].addEventListener("mouseleave", function(){
//         // card[i].style.transition = "all 2s linear";
//         // card[i].style.height = "fit-content";
//         card[i].children[0].style.transition = "all 0.4s";
//         card[i].children[0].style.transform = "translateY(-100%)";

//         card[i].children[1].style.border = "none";

//         card[i].children[3].style.transition = "all 0.4s";
//         card[i].children[3].style.transform = "translateY(200%)";
//     })
// }


// // let card_2 = document.querySelectorAll(".card-2");

// // card_2[0].addEventListener("mouseover", function(){
// //     card_2[0].children[1].style.transition = "all 1s";
// //     card_2[0].children[1].style.transform = "rotateZ(162deg)";
// //     card_2[0].children[1].children[0].style.transition = "all 1s";
// //     card_2[0].children[1].children[0].style.opacity = "1";

// //     card_2[0].children[2].style.transition = "all 1s";
// //     card_2[0].children[2].style.transform = "rotateZ(130deg)";
// //     card_2[0].children[2].children[0].style.transition = "all 1s";
// //     card_2[0].children[2].children[0].style.opacity = "1";

// //     card_2[0].children[3].style.transition = "all 1s";
// //     card_2[0].children[3].style.transform = "rotateZ(-162deg)";
// //     card_2[0].children[3].children[0].style.transition = "all 1s";
// //     card_2[0].children[3].children[0].style.opacity = "1";

// //     card_2[0].children[4].style.transition = "all 1s";
// //     card_2[0].children[4].style.transform = "rotateZ(-130deg)";
// //     card_2[0].children[4].children[0].style.transition = "all 1s";
// //     card_2[0].children[4].children[0].style.opacity = "1";

// // })

// // card_2[0].addEventListener("mouseleave", function(){
// //     card_2[0].children[1].style.transition = "all 1s";
// //     card_2[0].children[1].style.transform = "rotateZ(0)";
// //     card_2[0].children[1].children[0].style.transition = "all 1s";
// //     card_2[0].children[1].children[0].style.opacity = "0";

// //     card_2[0].children[2].style.transition = "all 1s";
// //     card_2[0].children[2].style.transform = "rotateZ(0)";
// //     card_2[0].children[2].children[0].style.transition = "all 1s";
// //     card_2[0].children[2].children[0].style.opacity = "0";

// //     card_2[0].children[3].style.transition = "all 1s";
// //     card_2[0].children[3].style.transform = "rotateZ(0)";
// //     card_2[0].children[3].children[0].style.transition = "all 1s";
// //     card_2[0].children[3].children[0].style.opacity = "0";

// //     card_2[0].children[4].style.transition = "all 1s";
// //     card_2[0].children[4].style.transform = "rotateZ(0)";
// //     card_2[0].children[4].children[0].style.transition = "all 1s";
// //     card_2[0].children[4].children[0].style.opacity = "0";

// // })