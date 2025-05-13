//navbar display
document.addEventListener("DOMContentLoaded", function() {
    var topLogo = document.querySelector('.top-logo');
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > topLogo.offsetHeight) {
            navbar.classList.add('unhide');
        } else {
            navbar.classList.remove('unhide');
        }
    });
});

//close mobile menu when a link is clicked
var checkbox = document.querySelector( '#nav-toggle' );
var navlinks = document.querySelector('#links');
document.body.addEventListener('click', function (event) {
    if (navlinks.contains(event.target)) {
        checkbox.checked = false;
    }
});

checkbox.addEventListener( 'click', function(){
if( this.checked ) {
    document.addEventListener( 'click', navlinks );
} 
});

//bg hero shape movements
document.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var parallaxElements = document.querySelectorAll('.hero .bg-shape');

    parallaxElements.forEach(function(element, index) {
        var translateY = -scrollTop * (index + 1) * 0.1; // Adjust the factor for the desired parallax effect
        element.style.transform = 'translateY(' + translateY + 'px)';
    });
});

//banner animation
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const bannerGridItems = document.querySelectorAll('.banner-grid-item');
  
    bannerGridItems.forEach(function(item) {
      const translateY = -scrollPosition / 8; // Adjust the speed of the scroll
  
      item.style.transform = 'translateX(' + translateY + 'px)';
    });
  });

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const bannerGridItems = document.querySelectorAll('.top-portfolio-grid .portfolio-grid-item');
    
    bannerGridItems.forEach(function(item) {
        let translateY;
        
        // Check if the screen width is less than or equal to 450 pixels (smallest screens)
        if (window.matchMedia('(max-width: 450px)').matches) {
            translateY = scrollPosition / 20; // Slowest scroll speed for the smallest screens
        }
        // Check if the screen width is less than or equal to 768 pixels (medium screens)
        else if (window.matchMedia('(max-width: 768px)').matches) {
            translateY = scrollPosition / 10; // Adjust the speed of the scroll for small screens
        } 
        // For larger screens
        else {
            translateY = scrollPosition / 6; // Default scroll behavior for larger screens
        }
        
        item.style.transform = 'translateX(' + translateY + 'px)';
    });
});


//portfolio bottom animation
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const bannerGridItems = document.querySelectorAll('.bottom-portfolio-grid .portfolio-grid-item');

  bannerGridItems.forEach(function(item) {
      let translateY;

      // Check if the screen width is less than or equal to 450 pixels (smallest screens)
      if (window.matchMedia('(max-width: 450px)').matches) {
        translateY = -scrollPosition / 20; // Slowest scroll speed for the smallest screens
    }
    // Check if the screen width is less than or equal to 768 pixels (medium screens)
    else if (window.matchMedia('(max-width: 768px)').matches) {
        translateY = -scrollPosition / 10; // Adjust the speed of the scroll for small screens
    } 
    // For larger screens
    else {
        translateY = -scrollPosition / 6; // Default scroll behavior for larger screens
    }

      item.style.transform = 'translateX(' + translateY + 'px)';
  });
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

// Animate elements on load
window.addEventListener("DOMContentLoaded", () => {
  const onLoadEls = document.querySelectorAll(".on-load");
  onLoadEls.forEach(el => el.classList.add("after"));
});
