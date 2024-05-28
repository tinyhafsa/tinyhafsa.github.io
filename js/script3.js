//initialize to show first slide
let slideIndex = 1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n) {
  //increment or decrement the slide index to show slide
  showSlides(slideIndex += n);
}
//thumbnail image controls
function currentSlide(n) {
  //set the slide index to the chosen slide and show it
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  //get all elements with class="mySlides"
  let slides = document.getElementsByClassName("mySlides");
  //if the slide index exceeds the number of slides, wrap around to the first slide
  if (n > slides.length) {slideIndex = 1}
  //if the slide index is less than 1, wrap around to the last slide
  if (n < 1) {slideIndex = slides.length}
  //hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //display the current slide (subtract 1 because array indices start at 0)
  slides[slideIndex-1].style.display = "block";
}