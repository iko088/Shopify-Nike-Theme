// Get the necessary elements
const menuIcon = document.querySelector('.menu-icon img');
const closeBtn = document.querySelector('.close-div img');
const smallScreenNav = document.querySelector('.small-screen-nav');
const navLinks = document.querySelectorAll('.small-screen-nav ul li a');

// Function to show the small screen nav
function showNav() {
  smallScreenNav.style.display = 'block';
}

// Function to hide the small screen nav
function hideNav() {
  smallScreenNav.style.display = 'none';
}

// Event listener for the menu icon to show the nav
menuIcon.addEventListener('click', showNav);

// Event listener for the close button to hide the nav
closeBtn.addEventListener('click', hideNav);

// Event listeners for each nav link to hide the nav on click
navLinks.forEach(link => {
  link.addEventListener('click', hideNav);
});


// Smooth scrolling 
document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with the class .in-view-animation
  const targetSections = document.querySelectorAll('.in-view-animation');

  const options = {
    threshold: 0.1 // Adjust as needed
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // Optionally stop observing once the class is added
      }
    });
  }, options);

  // Observe each target section
  targetSections.forEach(section => {
    observer.observe(section);
  });
});
