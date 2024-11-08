// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Scroll animation for navigation links
    const navLinks = document.querySelectorAll('.nav__links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Highlight active section on scroll
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - nav.offsetHeight;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
          link.classList.add('active');
        }
      });
    });
  
    // Contact form validation
    const form = document.querySelector('.header__form form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const inputs = form.querySelectorAll('input');
      let isValid = true;
      inputs.forEach(input => {
        if (input.value.trim() === '') {
          input.style.border = '2px solid red';
          isValid = false;
        } else {
          input.style.border = 'none';
        }
      });
      if (isValid) {
        alert('Appointment booked successfully!');
        form.reset();
      } else {
        alert('Please fill out all fields.');
      }
    });
  
    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navLinksContainer = document.querySelector('.nav__links');
    burger.addEventListener('click', () => {
      navLinksContainer.classList.toggle('nav__active');
    });
  });
  