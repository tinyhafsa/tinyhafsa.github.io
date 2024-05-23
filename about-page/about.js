//SCROLL EFFECT - ALL PAGES
window.addEventListener('scroll', function() {
    var navBar = document.querySelector('.navigationBar');
    var title = document.getElementById('titlePage');
    if (window.scrollY > window.innerHeight / 6) { // Check if scrolled halfway
        navBar.classList.add('scrolled');
        title.classList.add('hidden');
    } else {
        navBar.classList.remove('scrolled');
        title.classList.remove('hidden');
    }
});