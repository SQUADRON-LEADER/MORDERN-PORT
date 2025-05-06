let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oneclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
    
}

// Project Cards Animation on Scroll
const projectCards = document.querySelectorAll('.project-card');

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add scroll animation to project cards
function handleScrollAnimation() {
  projectCards.forEach(card => {
    if (isInViewport(card)) {
      card.classList.add('animate');
    }
  });
}

// Initial check and event listener
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);