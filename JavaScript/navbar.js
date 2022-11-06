console.log("Hello, I am navbar js");

let menubar = document.querySelector(".menubar");

// console.log(menubar);
let sidebar = document.querySelector(".sidebar")
let open = true;
menubar.addEventListener("click", function () {
    if (open) {
        sidebar.style.transition = "all 0.5s";
        sidebar.style.transform = "translateX(0px)";
        open = false
    }
    else {
        sidebar.style.transition = "all 0.5s";
        sidebar.style.transform = "translateX(-100%)";
        open = true;
    }

});

for(let i=0; i<sidebar.children[0].childElementCount-1; i++){
    sidebar.children[0].children[i].addEventListener("mouseover", function(){
        sidebar.children[0].children[i].style.transition = "all 0.4s";
        sidebar.children[0].children[i].style.transform = "translateX(10px)";
    });

    sidebar.children[0].children[i].addEventListener("mouseleave", function(){
        sidebar.children[0].children[i].style.transition = "all 0.4s";
        sidebar.children[0].children[i].style.transform = "translateX(0px)";
    });
}

// let mouse_trailer = document.querySelector(".mouse_trailer");

// console.log(mouse_trailer);

// window.onmousemove = evnet=>{
//     let x = event.clientX;
//     let y = event.clientY;

//     const keyFrames = {
//         transform: `translate(${x}px, ${y}px)`
//     }

//     mouse_trailer.animate(keyFrames, {
//         duration: 800,
//         fill: "forwards",
//     })

// }

//  prevScrollpos = window.pageYOffset
// let landingBottom=document.querySelector(".landing-section").getBoundingClientRect().bottom;
// document.addEventListener("scroll",()=>{
//     if(document.documentElement.scrollTop)
//     console.log( window.pageYOffset);
//     console.log(document.documentElement.scrollTop);
// })

// let prevScrollpos = window.pageYOffset
// window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("navbar-head").style.visibility = "visible";
//     } else {
//         document.getElementById("navbar-head").style.visibility = "hidden";
//     }
//     prevScrollpos = currentScrollPos;
//   }
  