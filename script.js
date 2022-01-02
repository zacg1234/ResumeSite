    
    // Button Navigation
const EDUCATIONBTN = document.getElementById("education");
const PROJECTBTN = document.getElementById("projects");
const OTHERBTN = document.getElementById("other");
const CONTACTBTN = document.getElementById("contact");
const PLAYPG = document.getElementById("PG_link");

const EDUTAG = document.getElementById("education-line");
const PROTAG = document.getElementById("project-line");
const OTHTAG = document.getElementById("hobbies-line");

EDUCATIONBTN.addEventListener("click", scrollEDU);
PROJECTBTN.addEventListener("click", scrollPRO);
OTHERBTN.addEventListener("click", scrollOTH);
blinkText(PLAYPG.innerText)

function blinkText(text){
    let myInterval = setInterval(() =>{
        
       setTimeout( ()=>{
            if (PLAYPG.style.color == "transparent"){
                PLAYPG.style.color  = "rgb(59, 74, 53)"
            } 
            else {
                PLAYPG.style.color  = "transparent"
            }
        }
        ,500)
    }
    , 1000)
}


function scrollEDU(){
   EDUTAG.scrollIntoView();
}

function scrollPRO(){
    PROTAG.scrollIntoView();
}

function scrollOTH(){
    OTHTAG.scrollIntoView();
}


    // Contact form setup
CONTACTBTN.addEventListener("click", function(){window.open('mailto:zachgurevich@gmail.com?subject=General Inquiry')});
CONTACTBTN.addEventListener("click", OpenContactForm);

function OpenContactForm(){

};



const LOADSCREEN = document.getElementById("load-screen"); // load screen that disapears

var loaded = 0; 

function countLoaded(){ // adds up the loaded elements 
    loaded++;
}

const HEADERPHOTO = document.getElementById("nav-image");
const PIC1 = document.getElementById("intro-pic-1");
const PIC2 = document.getElementById("intro-pic-2");
const UICLOGO = document.getElementById("uic-logo");
const MYLOGO = document.getElementById("MY-Logo");

HEADERPHOTO.addEventListener("load", countLoaded());
PIC1.addEventListener("load", countLoaded());
PIC2.addEventListener("load", countLoaded());
UICLOGO.addEventListener("load", countLoaded());
MYLOGO.addEventListener("load", countLoaded());

if(loaded = 5){
    LOADSCREEN.classList.add("hidden") // load screen fade out
    setTimeout(function(){LOADSCREEN.style.visibility = "hidden"}, 1800) // removes the load screen
}

/* window.addEventListener("load", function(){
    LOADSCREEN.classList.add("hidden") // load screen fade out
    setTimeout(function(){LOADSCREEN.style.visibility = "hidden"}, 1800) // removes the load screen
    
}); */
