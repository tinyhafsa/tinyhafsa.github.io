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


//TABS
function openCategory(evt, category) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();