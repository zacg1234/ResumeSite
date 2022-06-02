    
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



    // Blinking text in the projects section
function blinkText(text){
    let myInterval = setInterval(() =>{
       setTimeout( ()=>{
            if (PLAYPG.style.color == "transparent"){
                PLAYPG.style.color  = "rgb(143, 215, 114)";
            } 
            else {
                PLAYPG.style.color  = "transparent"
            }
        }
        ,500)
    }
    , 1000)
}




const NAVIGATION = document.getElementById("nav-options");
const HEADERIMG = document.getElementById("nav-image");

window.addEventListener("scroll", function(){
    var navPosition = NAVIGATION.getBoundingClientRect();
    var headerPosition = HEADERIMG.getBoundingClientRect();
    if(navPosition.top >= headerPosition.top){ 
        NAVIGATION.style.backgroundColor = "rgba(17, 17, 17, 0.65)"
    }
    if(navPosition.top <= headerPosition.top){
        //console.log("Scrolled.");
        NAVIGATION.style.backgroundColor = "rgba(17, 17, 17, 1)"
    }
});



  /*   // Paralax scrolling
var rellax = new Rellax('.rellax-bellow', {
    center: true
}, {
    breakpoints:[560,820]
}); */


