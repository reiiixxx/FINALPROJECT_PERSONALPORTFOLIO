"use strict";


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Developer', 'Frontend Developer', 'Backend Developer', 'Software Engineer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true
});

// const intro = new Typed('.introduction', {
//     strings: ['My name is Taaseen.'],
//     typeSpeed: 45,
//     backSpeed: 50,
//     backDelay: 1000,
//     loop: true
// });


function carousel() {
    // let carouselSlider = document.querySelector(".about-carousel");
    // let list = document.querySelector(".carousel-list");
    // let list2;

    const speed = 1;

    const width = list.offsetWidth;
    let x = 0;
    let x2 = width;
    

    function clone(){
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);
        list.style.left = `${width}px`;
    }

    function moveFirst(){
        x -= speed;

        if(width >= Math.abs(x)){
            list.style.left = `${x}px`
        }else {
            x = width
        }
    }

    function moveSecond(){
        x2 -= speed;


        if (list2.offsetWidth >= Math.abs(x2)){
            list2.style.left = `${x2}px`;
        }else {
            x2 = width;
        }
    }

    function hover(){
        clearInterval(a);
        clearInterval(b);

    }


    function unhover(){
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);

    }

    clone();


    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);

    carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover);

}

carousel();



