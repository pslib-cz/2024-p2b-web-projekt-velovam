// hamburger menu
// .header__hamburger
// .hamburger__nav

document.addEventListener('DOMContentLoaded', function() { 
    for (const menubtn of document.querySelectorAll(".header__hamburger")) {
        menubtn.addEventListener('click', function() {
            menubtn.classList.toggle("header__hamburger--active");
            document.querySelector(".hamburger__nav").classList.toggle("hamburger__nav--active");
            document.querySelector(".body__main").classList.toggle("body__main--none");
        });
    }
});