function scrollToHome() {
    var homeDiv = document.querySelector('.home');
    homeDiv.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAboutMe() {
    var aboutMeDiv = document.querySelector('.about-me');
    aboutMeDiv.scrollIntoView({ behavior: 'smooth' });
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.button-3')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    if (!event.target.matches('.button-4')) {
          var dropdowns = document.getElementsByClassName("dropdown-content-2");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-2')) {
              openDropdown.classList.remove('show-2');
            }
          }
        }
    
  }


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction2() {
    document.getElementById("myDropdown-2").classList.toggle("show-2");
  }

// Close the dropdown if the user clicks outside of it

  



