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

for(let i=0; i<sidebar.children[0].childElementCount; i++){
    sidebar.children[0].children[i].addEventListener("mouseover", function(){
        sidebar.children[0].children[i].style.transition = "all 0.4s";
        sidebar.children[0].children[i].style.transform = "translateX(10px)";
    });

    sidebar.children[0].children[i].addEventListener("mouseleave", function(){
        sidebar.children[0].children[i].style.transition = "all 0.4s";
        sidebar.children[0].children[i].style.transform = "translateX(0px)";
    });
}

