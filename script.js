const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const more_proj = document.querySelector('.more-projects-btn');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}
more_proj.addEventListener('click',() =>{
  window.location.href = "projects.html";
});

