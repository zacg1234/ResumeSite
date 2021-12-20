const Images = [document.getElementById("img1"),document.getElementById("img2"),
    document.getElementById("img3"),document.getElementById("img4")];
    
    
window.addEventListener("load",stop);

var i = 0;

var interval = setInterval(showImages, 600)

function showImages(){
    Images[i].classList.add("hidden");
    if(i<3){
        Images[i+1].classList.remove("hidden");
    }
    else if(i == 3){
        Images[0].classList.remove("hidden");
    }
    i++ ;
    if(i>3){  i=0  }
    
}

function stop(){
    clearInterval(interval);
    Images[i].classList.add("hidden");
}
