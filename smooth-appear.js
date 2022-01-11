
const INTROPIC1 = document.getElementById("intro-pic-1");
const INTROPIC2 = document.getElementById("intro-pic-2");
const UICLOGO = document.getElementById("uic-logo");
const MYLOGO = document.getElementById("MY-Logo");
const RF1 = document.getElementById("RFimage1");
const RF2 = document.getElementById("RFimage2");
const RF3 = document.getElementById("RF-joined3-4");
const PG = document.getElementById("PG_image");

const HB1 = document.getElementById("motorcycle-img");
const HB2 = document.getElementById("engine-img");
const HB3 = document.getElementById("macbook-img");

INTROPIC1.classList.add("hidden_img");
INTROPIC2.classList.add("hidden_img");
UICLOGO.classList.add("hidden_img");
MYLOGO.classList.add("hidden_img");

RF1.classList.add("hidden_img");
RF2.classList.add("hidden_img");
RF3.classList.add("hidden_img");
PG.classList.add("hidden_img");

HB1.classList.add("hidden_img");
HB2.classList.add("hidden_img");
HB3.classList.add("hidden_img");

var windowOffset = ( window.innerHeight/100 );


// show if on screen when page loads
window.addEventListener("load", function(){
    if(INTROPIC1.getBoundingClientRect().top < (window.innerHeight - 35 * windowOffset)){
        INTROPIC1.classList.remove("hidden_img");
        INTROPIC1.classList.add("smooth-appear");
    }
    if(INTROPIC2.getBoundingClientRect().top < (window.innerHeight - 30 * windowOffset)){
        INTROPIC2.classList.remove("hidden_img");
        INTROPIC2.classList.add("smooth-appear");
    }
    if(UICLOGO.getBoundingClientRect().top < window.innerHeight - 20 * windowOffset){
        UICLOGO.classList.remove("hidden_img");
        UICLOGO.classList.add("smooth-appear");
    }
    if(MYLOGO.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        MYLOGO.classList.remove("hidden_img");
        MYLOGO.classList.add("smooth-appear");
    }
    if(RF1.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        RF1.classList.remove("hidden_img");
        RF1.classList.add("smooth-appear");
        RF2.classList.remove("hidden_img");
        RF2.classList.add("smooth-appear");
        RF3.classList.remove("hidden_img");
        RF3.classList.add("smooth-appear");
    }
    if(PG.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        PG.classList.remove("hidden_img");
        PG.classList.add("smooth-appear");
    }
    if(HB1.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        HB1.classList.remove("hidden_img");
        HB1.classList.add("smooth-appear");
    }
    if(HB2.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        HB2.classList.remove("hidden_img");
        HB2.classList.add("smooth-appear");
    }
    if(HB3.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        HB3.classList.remove("hidden_img");
        HB3.classList.add("smooth-appear");
    }
    
});


// appear when scrolled over
window.addEventListener("scroll", function(){
    if(INTROPIC1.getBoundingClientRect().top < (window.innerHeight - 30 * windowOffset)){
        INTROPIC1.classList.remove("hidden_img");
        INTROPIC1.classList.add("smooth-appear");
    }
    if(INTROPIC2.getBoundingClientRect().top < (window.innerHeight - 30 * windowOffset)){
        INTROPIC2.classList.remove("hidden_img");
        INTROPIC2.classList.add("smooth-appear");
    }
    if(UICLOGO.getBoundingClientRect().top < (window.innerHeight - 20 * windowOffset)){
        UICLOGO.classList.remove("hidden_img");
        UICLOGO.classList.add("smooth-appear");
    }
    if(MYLOGO.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        MYLOGO.classList.remove("hidden_img");
        MYLOGO.classList.add("smooth-appear");
    }
    if(RF1.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        RF1.classList.remove("hidden_img");
        RF1.classList.add("smooth-appear");
        RF2.classList.remove("hidden_img");
        RF2.classList.add("smooth-appear");
        RF3.classList.remove("hidden_img");
        RF3.classList.add("smooth-appear");
    }
    if(PG.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        PG.classList.remove("hidden_img");
        PG.classList.add("smooth-appear");
    }
    if(HB1.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        HB1.classList.remove("hidden_img");
        HB1.classList.add("smooth-appear");
    }
    if(HB2.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        HB2.classList.remove("hidden_img");
        HB2.classList.add("smooth-appear");
    }
    if(HB3.getBoundingClientRect().top < (window.innerHeight - 15 * windowOffset)){
        HB3.classList.remove("hidden_img");
        HB3.classList.add("smooth-appear");
    }
});


