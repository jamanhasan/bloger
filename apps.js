var menubtn = document.getElementById("menu-btn");
var sidenav = document.getElementById("side-nav");
var menu = document.getElementById("menu");
sidenav.style.top = ("-400px")
menubtn.onclick = function () {
    if (sidenav.style.top == "-400px") {
        sidenav.style.top = "100px"
        menu.src = "images/icon-close.svg";
    } else {
        sidenav.style.top = "-400px";
        menu.src = "images/icon-hamburger.svg";
    }
}
