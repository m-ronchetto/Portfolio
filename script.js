window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("projects-header").addEventListener("mouseover", function(){
        let open = document.getElementsByClassName("projects-nav-hidden")[0];
        console.log("open: " + open);
        open.classList.remove("projects-nav-hidden");
        open.classList.add("projects-nav");
    });
    document.getElementById("projects-header").addEventListener("mouseout", function(){
        let close = document.getElementsByClassName("projects-nav")[0];
        console.log("close: " + close);
        close.classList.remove("projects-nav");
        close.classList.add("projects-nav-hidden");
    });
});

var slideIndex = 1;

function openModal(id) {
    document.getElementById(id).style.display = "block";
    slideIndex=1;
  }
  
  // Close the Modal
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  
//   showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n, className) {
    showSlides(slideIndex += n, className);
  }
  
  // Thumbnail image controls
  function currentSlide(n, className) {
    showSlides(slideIndex = n, className);
  }
  
  function showSlides(n, className) {
    var i;
    var slides = document.getElementsByClassName(className);
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].classList.add("active");
  }