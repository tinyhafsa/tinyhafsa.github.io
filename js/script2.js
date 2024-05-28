window.addEventListener('scroll', function() {
    //select the navigation bar, all links within the navigation bar, the logo, the page title, and all SVG icons within the navigation bar
  var navBar = document.querySelector('.navigationBar');
  var links = document.querySelectorAll('.navigationBar a');
  var logo = document.querySelector('.navigationBar img');
  var title = document.getElementById('titlePage');
  var svgIcons = document.querySelectorAll('.navigationBar svg');

  //check if the page has been scrolled past a certain point (one-sixth of the window height)
  if (window.scrollY > window.innerHeight / 6) { //check if scrolled past a certain point
      navBar.classList.add('scrolled'); //add class
      title.classList.add('hidden'); //add class
      //add the 'scrolled-link' class to each link in the navigation bar
      links.forEach(function(link) {
          link.classList.add('scrolled-link');
      });
      //add the 'scrolled-svg' class to each SVG icon in the navigation bar
      svgIcons.forEach(function(svg) {
          svg.classList.add('scrolled-svg');
      });
      logo.src = "/homepage-images/logo.png"; // Change to the new logo image
  } else {
      //remove the 'scrolled' class from the navigation bar
      navBar.classList.remove('scrolled'); //remove class
      title.classList.remove('hidden'); //remove class
      //remove the 'scrolled-link' class from each link in the navigation bar
      links.forEach(function(link) {
          link.classList.remove('scrolled-link');
      });
      //remove the 'scrolled-svg' class from each SVG icon in the navigation bar
      svgIcons.forEach(function(svg) {
          svg.classList.remove('scrolled-svg');
      });
      logo.src = "/blog-page/images/logo.png"; // Change back to the original logo image
  }
});

// FAQs section - handle the accordion behavior for the FAQ questions
var acc = document.getElementsByClassName("question");
var i;
//loop through all elements with the class "question" and add a click event listener to each
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    //toggle the "active" class on the clicked question to highlight or unhighlight it
    this.classList.toggle("active");
    //get the next sibling element, which is the panel associated with the question
    var panel = this.nextElementSibling;
    //toggle the display property of the panel between "block" and "none"
    if (panel.style.display === "block") {
      //if the panel is currently displayed, hide it
      panel.style.display = "none";
    } else {
      //if the panel is currently hidden, display it
      panel.style.display = "block";
    }
  });
}