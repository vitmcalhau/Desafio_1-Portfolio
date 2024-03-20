let lastScroll = 0;
window.addEventListener("scroll", function() {
let currentScroll = document.documentElement.scrollTop;

if (currentScroll > lastScroll) {
    // Rolou para baixo
    document.querySelector('.navbar').style.transform = 'translateY(-100%)';
} else {
    // Rolou para cima
    document.querySelector('.navbar').style.transform = 'translateY(0)';
}
lastScroll = currentScroll <= 0 ? 0 : currentScroll;
}, false);