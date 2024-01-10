var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});











const slider = document.querySelector(".container");
const container = document.querySelectorAll(".slide");

document.getElementById("left").addEventListener("click", function() {
    toPrevious()
})

document.getElementById("right").addEventListener("click", function() {
    toNext()
})

let current = 0;
let prev = 4;
let next = 1;

const toPrevious = () => {
    console.log('prev')
    if (current > 0) {
        toSlide(current - 1)
    } else {
        toSlide(container.length - 1)
    }
}

const toNext = () => {

    if (current < 4) {
        toSlide(current + 1)
    } else {
        toSlide(0)
    }
}

const toSlide = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < container.length; i++) {
        container[i].classList.remove("active");
        container[i].classList.remove("prev");
        container[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    container[current].classList.add("active");
    container[prev].classList.add("prev");
    container[next].classList.add("next");
}





// achievment
/**
  Swiper:
  https://swiperjs.com/
**/
// const swiper = new Swiper(".swiperCarousel", {
//     slidesPerView: 3,
//     centeredSlides: true,
//     spaceBetween: 10,
//     keyboard: {
//       enabled: true,
//     },
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
  
//   const slides = document.getElementsByClassName("swiper-slide");
//   for (const slide of slides) {
//     slide.addEventListener("click", () => {
//       const { className } = slide;
//       if (className.includes("swiper-slide-next")) {
//         swiper.slideNext();
//       } else if (className.includes("swiper-slide-prev")) {
//         swiper.slidePrev();
//       }
//     });
//   }
  
//   function resizeTextToFit() {
//     const quoteEls = document.getElementsByClassName('quote');
//     for (const el of quoteEls) {
//       el.style.width = el.offsetWidth;
//       el.style.height = el.offsetHeight;
//     }
//     textFit(quoteEls, { maxFontSize: 14 });
//   }
//   resizeTextToFit();
//   addEventListener("resize", (event) => {
//     resizeTextToFit();
//   });


