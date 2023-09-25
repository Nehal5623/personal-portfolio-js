const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

var typed = new Typed('#intro', {
    strings : ['Hi, myself Nehal Rani Sinha'],
    typeSpeed : 100
});

AOS.init({
    duration:2000
})