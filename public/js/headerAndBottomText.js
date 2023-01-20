
var prevScrollpos = window.pageYOffset;


window.onscroll = () => {
    var y = window.innerWidth
    if(y>'768'){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-60px";
        }
    prevScrollpos = currentScrollPos;
    }
};