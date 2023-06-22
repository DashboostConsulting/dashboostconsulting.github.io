//close mobile menu when a link is clicked

    //define checkbox
    var checkbox = document.querySelector( '#nav-toggle' );

    //define nav links, so menu will close when click these
    var navlinks = document.querySelector('#links');

    //when you click links in the nav menu, the checkbox gets unchecked and menu closes
    document.body.addEventListener('click', function (event) {
        if (navlinks.contains(event.target)) {
            checkbox.checked = false;
        }
    });

    //adds event listener when you click on the burger menu
    checkbox.addEventListener( 'click', function(){
    if( this.checked ) {
        document.addEventListener( 'click', navlinks );
    } 
    });

//faq section open answer functionality
    var acc = document.getElementsByClassName("faq-question");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

//animation trigger
  function reveal() {
    var reveals = document.querySelectorAll(".fade-in, .fade-in-delay, .fade-in-delay-more");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("after");
      }
    }
  }
  window.addEventListener("scroll", reveal);

//banner animation


 function myFunction(x) {
  if (x.matches) { // If media query matches
    function changeMargin() {
      var scroll = (window.pageYOffset / 2.5);
      var width = scroll;
    
      document.getElementById('banner-grid').style.marginLeft = width + 'px';
    }
    
    window.addEventListener('scroll', function(){
      requestAnimationFrame(changeMargin);
     })
  } else {
    function changeMargin() {
      var scroll = (window.pageYOffset / 10);
      var width = scroll;
    
      document.getElementById('banner-grid').style.marginLeft = width + 'px';
    }
    
    window.addEventListener('scroll', function(){
      requestAnimationFrame(changeMargin);
     })
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

//sticker animation
function rotateItem() {
  var scroll = (window.pageYOffset / 25);
  var deg = scroll;

  document.getElementById('sticker').style.transform = 'rotate('+deg+'deg)';
}

window.addEventListener('scroll', function(){
  requestAnimationFrame(rotateItem);
 })