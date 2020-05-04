//MENU//
            function showMenu() {
            var menuDropdown = document.getElementById("menumobile");
            if (menuDropdown.style.display === "none") {
              menuDropdown.style.display = "block";
            } else {
              menuDropdown.style.display = "none";
            }
          }
/////////////////////////////////////////////////////////////////:
//SLIDE//
            var slideIndex = 1;
                showDivs(slideIndex);

            function plusDivs(n) {
                showDivs(slideIndex += n);
            }
            function showDivs(n) {
            var i;
            var x = document.getElementsByClassName("mySlides");
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
            }
            x[slideIndex-1].style.display = "block";  
}
