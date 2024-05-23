//SCROLL EFFECT - ALL PAGES
window.addEventListener('scroll', function() {
    var navBar = document.querySelector('.navigationBar');
    var links = document.querySelectorAll('.navigationBar a');
    var logo = document.querySelector('.navigationBar img');
    var title = document.getElementById('titlePage');

    if (window.scrollY > window.innerHeight / 6) { // Check if scrolled past a certain point
        navBar.classList.add('scrolled');
        title.classList.add('hidden');
        links.forEach(function(link) {
            link.classList.add('scrolled-link');
        });
        logo.src = "/homepage-images/logo.png"; // Change to the new logo image
    } else {
        navBar.classList.remove('scrolled');
        title.classList.remove('hidden');
        links.forEach(function(link) {
            link.classList.remove('scrolled-link');
        });
        logo.src = "/blog-page/images/logo.png"; // Change back to the original logo image
    }
});
