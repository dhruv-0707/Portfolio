const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}
// const card = document.querySelectorAll('.skill-category');

// card.addEventListener('click', function() {
//   card.classList.toggle('is-flipped');
// });
