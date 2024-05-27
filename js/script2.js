window.addEventListener('scroll', function() {
  var navBar = document.querySelector('.navigationBar');
  var links = document.querySelectorAll('.navigationBar a');
  var logo = document.querySelector('.navigationBar img');
  var title = document.getElementById('titlePage');
  var svgIcons = document.querySelectorAll('.navigationBar svg');

  if (window.scrollY > window.innerHeight / 6) { // Check if scrolled past a certain point
      navBar.classList.add('scrolled');
      title.classList.add('hidden');
      links.forEach(function(link) {
          link.classList.add('scrolled-link');
      });
      svgIcons.forEach(function(svg) {
          svg.classList.add('scrolled-svg');
      });
      logo.src = "/homepage-images/logo.png"; // Change to the new logo image
  } else {
      navBar.classList.remove('scrolled');
      title.classList.remove('hidden');
      links.forEach(function(link) {
          link.classList.remove('scrolled-link');
      });
      svgIcons.forEach(function(svg) {
          svg.classList.remove('scrolled-svg');
      });
      logo.src = "/blog-page/images/logo.png"; // Change back to the original logo image
  }
});


//FAQs section
var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}