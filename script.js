const EDUCATIONBTN = document.getElementById("education");
const PROJECTBTN = document.getElementById("projects");
const OTHERBTN = document.getElementById("other");
const CONTACTBTN = document.getElementById("contact");

const EDUTAG = document.getElementById("education-line");
const PROTAG = document.getElementById("project-line");
const OTHTAG = document.getElementById("other-tag");

EDUCATIONBTN.addEventListener("click", scrollEDU);
PROJECTBTN.addEventListener("click", scrollPRO);
OTHERBTN.addEventListener("click", scrollOTH);


function scrollEDU(){
   // window.scrollBy(0, (window.innerHeight/100)*300);
   EDUTAG.scrollIntoView();
}

function scrollPRO(){
    PROTAG.scrollIntoView();
}

function scrollOTH(){
    OTHTAG.scrollIntoView();
}



 