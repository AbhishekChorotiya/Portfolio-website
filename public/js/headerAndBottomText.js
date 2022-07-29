// two onScroll event will not work on same time so included in one function 

var prevScrollpos = window.pageYOffset;


window.onscroll = () => {
    //for bottom div text 
    if (window.pageYOffset > 120) {
        document.getElementById("scorll").style.visibility = "hidden";
        document.getElementById("text").style.color = "#dcdcdc";
    } 
    if (window.pageYOffset > 300) {
        document.getElementById("text").style.color = "#f0b077";

    } 
    if(window.pageYOffset<120) {
        document.getElementById("scorll").style.visibility = "visible";
        document.getElementById("text").style.color = "#201f1d";
    }
    if(window.pageYOffset>615){

    }else{
        
    }

// for header 

    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
};