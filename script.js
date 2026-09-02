const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-label', navLinks.classList.contains('open') ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const message = document.getElementById('formMessage');
  message.style.display = 'block';
  message.textContent = 'Thank you! Your enquiry has been prepared. Please connect this form to your email service before publishing.';
  this.reset();
});
