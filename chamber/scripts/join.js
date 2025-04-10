// Set current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('active');
  });
}

// Modal functionality
const benefitButtons = document.querySelectorAll('.benefits-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

benefitButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetModal = document.getElementById(button.dataset.target);
    if (targetModal) {
      targetModal.showModal();
    }
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dialog = button.closest('dialog');
    if (dialog) dialog.close();
  });
});

// Set form timestamp
const timestampField = document.getElementById('timestamp');
if (timestampField) {
  timestampField.value = new Date().toISOString();
}

// Form validation feedback
const form = document.getElementById('join-form');
if (form) {
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert('Please fill out all required fields correctly.');
    }
  });
}
// Modal functionality for opening the modal
document.querySelectorAll('.info-btn').forEach(card => {
  card.addEventListener('click', function() {
    const modalId = this.dataset.modal;
    const targetModal = document.getElementById(modalId);
    if (targetModal) {
      targetModal.showModal(); // Use showModal() to open the <dialog> element
    }
  });
});

// Modal functionality for closing the modal
document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', function() {
    const dialog = this.closest('dialog'); // Directly target the <dialog> element
    if (dialog) {
      dialog.close(); // Use close() to close the <dialog> element
    }
  });
});
