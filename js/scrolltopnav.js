window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
// Detecta quando o usuário volta ao topo
window.addEventListener("scroll", function() {
    if (window.scrollY === 0) {
        navbar.classList.remove("sticky");
    }
});