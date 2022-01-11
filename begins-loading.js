const Images = [document.getElementById("img1"),document.getElementById("img2"),
document.getElementById("img3"),document.getElementById("img4")];



if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}


var i = 0;

var pageIsLoaded = 0; // Have the first 5 images loaded in
var playedLoadScreen = 0; // Has the load screen played at least once

var interval = setInterval(showImages, 600) // Start the loadscreen 
function showImages(){
    if(playedLoadScreen){checkLoaded();}
    Images[i].classList.add("hidden");
    if(i<3){
        Images[i+1].classList.remove("hidden");
    }
    else if(i == 3){
        Images[0].classList.remove("hidden");
        playedLoadScreen = 1;
    }
    i++ ;
    if(i>3){  
        i=0;
     }
    
}




