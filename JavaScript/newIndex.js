
// //Typing effect
// function typeString(string) {
//     let text = document.getElementById("text")
//     let i = 0;
//     // WriteString();



//     function WriteString() {

//         let typing = setInterval(() => {
//             if (i < string.length) {
//                 text.innerText += string[i];
//                 i++;
//             }
//             else {
//                 clearInterval(typing);
//                 backSpace();
//             }
//         }, 150);

//     }

//     function backSpace() {
//         setTimeout(() => {
//             let deleting = setInterval(() => {
//                 if (i > 0) {
//                     text.innerText = text.innerText.substring(0, text.innerText.length - 1);
//                     i--;
//                 }
//                 else {
//                     clearInterval(deleting);
//                     WriteString();
//                 }
//             }, 150)
//         }, 1000)


//     }







// }
// typeString("CODE TO ADEPT")


    // 

    // let registerMouseTrailer = document.querySelector(".registerMouseTrailer");

    // let landingPg = document.querySelector(".landingPg");

    // landingPg.addEventListener("mouseenter", function(){
    //     registerMouseTrailer.style.display = "1";
    // })

    // landingPg.addEventListener("mouseleave", function(){
    //     registerMouseTrailer.style.display = "0";
    // })

    // window.onmousemove = evnet=>{
    //     registerMouseTrailer.style.opacity = "1";

    //     let x = event.clientX;
    //     let y = event.clientY;
    //     // console.log(y);
    //     let height = window.outerHeight;

    //     const keyFrames = {
    //         transform: `translate(${x}px, ${y}px)`
    //     }

    //     registerMouseTrailer.animate(keyFrames, {
    //         duration: 800,
    //         fill: "forwards",
    //     })
    // }



    // registerMouseTrailer.addEventListener("click", function(){
    //     document.location.href = "register.html";
    // })


    (function ($) {
        $(function () {


            $(window).on('scroll', function () {
                fnOnScroll();
            });

            $(window).on('resize', function () {
                fnOnResize();
            });


            var agTimeline = $('.js-timeline'),
                agTimelineLine = $('.js-timeline_line'),
                agTimelineLineProgress = $('.js-timeline_line-progress'),
                agTimelinePoint = $('.js-timeline-card_point-box'),
                agTimelineItem = $('.js-timeline_item'),
                agOuterHeight = $(window).outerHeight(),
                agHeight = $(window).height(),
                f = -1,
                agFlag = false;

            function fnOnScroll() {
                agPosY = $(window).scrollTop();

                fnUpdateFrame();
            }

            function fnOnResize() {
                agPosY = $(window).scrollTop();
                agHeight = $(window).height();

                fnUpdateFrame();
            }

            function fnUpdateWindow() {
                agFlag = false;

                agTimelineLine.css({
                    top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
                    bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
                });

                f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
            }

            function fnUpdateProgress() {
                var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

                i = agTop + agPosY - $(window).scrollTop();
                a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
                n = agPosY - a + agOuterHeight / 2;
                i <= agPosY + agOuterHeight / 2 && (n = i - a);
                agTimelineLineProgress.css({ height: n + "px" });

                agTimelineItem.each(function () {
                    var agTop = $(this).find(agTimelinePoint).offset().top;

                    (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
                })
            }

            function fnUpdateFrame() {
                agFlag || requestAnimationFrame(fnUpdateWindow);
                agFlag = true;
            }


        });
    })(jQuery);
