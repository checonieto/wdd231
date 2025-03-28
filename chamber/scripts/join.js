// Set current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

menuToggle.addEventListener('click', () => {
  primaryNav.classList.toggle('active');
});

// Modal functionality
const benefitButtons = document.querySelectorAll('.benefits-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

benefitButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetModal = document.getElementById(button.dataset.target);
    targetModal.showModal();
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('dialog').close();
  });
});

// Set form timestamp
document.getElementById('timestamp').value = new Date().toISOString();

// Form validation feedback
const form = document.getElementById('join-form');
form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert('Please fill out all required fields correctly.');
  }
});