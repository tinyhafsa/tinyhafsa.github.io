//SCROLL EFFECT - ALL PAGES
window.addEventListener('scroll', function() {
    var navBar = document.querySelector('.navigationBar'); //declaring variable and attaching it to class
    var title = document.getElementById('titlePage'); //declaring variable and attaching it to id

    if (window.scrollY > window.innerHeight / 3.5) { //check if scrolled through the page
        navBar.classList.add('scrolled'); //add class
        title.classList.add('hidden'); //add id

    } else { //rif page is not scrolled, class and id remains the same
        navBar.classList.remove('scrolled');
        title.classList.remove('hidden');
    }

});

//TABS
function openCategory(evt, category) {
  //declaring variables
    var i, tabcontent, tablinks;
    //get elements with class="tablinks" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    //get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " active";
  }
  //get the element with id="defaultOpen" and open it by default when the page loads
  document.getElementById("defaultOpen").click();