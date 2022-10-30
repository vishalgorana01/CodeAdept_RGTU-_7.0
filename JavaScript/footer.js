console.log("Hello, I am footer");

let social_media_handlers = document.querySelector(".container-5 .one div");

for(let i=0; i<social_media_handlers.childElementCount; i++){
    social_media_handlers.children[i].addEventListener("mouseover", function(){
        social_media_handlers.children[i].style.transition = "all 1s";
        social_media_handlers.children[i].style.backgroundColor = "#ffffffb5";
        social_media_handlers.children[i].children[0].style.color = "#091015";
    })

    social_media_handlers.children[i].addEventListener("mouseleave", function(){
        social_media_handlers.children[i].style.transition = "all 1s";
        social_media_handlers.children[i].style.backgroundColor = "#091015";
        social_media_handlers.children[i].children[0].style.color = "#ffffffb5";
    })
}

let useful_links = document.querySelector(".container-5 .three div ul");

// console.log(useful_links);

for(let i=0; i<useful_links.childElementCount; i++){
    useful_links.children[i].addEventListener("mouseover", function(){
        useful_links.children[i].style.transition = "all 0.4s"
        useful_links.children[i].style.transform = "translateX(5px)";
        useful_links.children[i].children[0].style.display = "inline-block";
    })

    useful_links.children[i].addEventListener("mouseleave", function(){
        useful_links.children[i].style.transition = "all 0.4s"
        useful_links.children[i].style.transform = "translateX(0px)";
        useful_links.children[i].children[0].style.display = "none";
    })
}