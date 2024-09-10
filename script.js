const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const more_proj = document.querySelector('.more-projects-btn');
const phone_c = document.querySelector('.phone');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}
more_proj.addEventListener('click', () => {
  window.location.href = "projects.html";
});
phone_c.addEventListener('click', () => {
  navigator.clipboard.writeText("+91 7037052148").then(() => {
    // Show an alert dialog
    alert("Phone No Copied");
  }).catch(err => {
    console.error("Some error occured", err);
  });
});
