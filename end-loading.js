
const LOADSCREEN = document.getElementById("load-screen"); // load screen that disapears

function countLoaded(){ // adds up the loaded elements 
    pageIsLoaded++;
}

document.getElementById("nav-image").addEventListener("load", countLoaded()); // is nav-image loaded? 
document.getElementById("intro-pic-1").addEventListener("load", countLoaded()); // is intro-pic-1 loaded?
document.getElementById("intro-pic-2").addEventListener("load", countLoaded()); // is intro-pic-2 loaded?
document.getElementById("uic-logo").addEventListener("load", countLoaded()); // is uic-logo loaded?
document.getElementById("MY-Logo").addEventListener("load", countLoaded()); // is MY-Logo loaded?

function checkLoaded(){
    if(pageIsLoaded >= 5 && playedLoadScreen){ // if the page is suffieciently loaded and the loadscreen played then end loading
        stop();
        LOADSCREEN.classList.add("hidden") // load screen fade out
        setTimeout(function(){LOADSCREEN.style.visibility = "hidden"}, 1800) // removes the load screen
    } 
}