const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const more_proj = document.querySelector('.more-projects-btn');
const phone_c = document.querySelector('.phone');
const text = "+91 7037052148";
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
  alert("hello");
});
phone_c.addEventListener('click', () => {
  
});
function copytext(){
  navigator.clipboard.writeText(text).then(() => {
    // Show an alert dialog
    alert("Phone No Copied");
  }).catch(err => {
    console.error("Some error occured", err);
  });
}
