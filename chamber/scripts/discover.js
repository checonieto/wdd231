// Hamburger menu functionality
document.getElementById('menu-toggle').addEventListener('click', function() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
});

// Load JSON data with error handling
async function loadCardData() {
  try {
    const response = await fetch('data/items.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    populateCards(data);
  } catch (error) {
    console.error('Error loading card data:', error);
    document.querySelector('.card-container').innerHTML = 
      '<p>Unable to load content. Please try again later.</p>';
  }
}

function populateCards(data) {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = ''; // Clear loading state
  
  data.forEach(item => {
    const card = document.createElement('article');
    card.classList.add('card');
    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <figcaption>${item.name}</figcaption>
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button aria-label="Learn more about ${item.name}">Learn More</button>
    `;
    cardContainer.appendChild(card);
  });
}

// Last visit message with more robust storage handling
function showVisitMessage() {
  try {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();
    const visitMessage = document.getElementById('visit-message');

    if (!lastVisit) {
      visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
      visitMessage.textContent = daysSinceLastVisit < 1 
        ? "Back so soon! Awesome!" 
        : `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit === 1 ? '' : 's'} ago.`;
    }
    
    localStorage.setItem('lastVisit', currentDate);
  } catch (e) {
    console.error('LocalStorage access failed:', e);
  }
}

// Footer information
function updateFooter() {
  document.getElementById('current-year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = document.lastModified;
  
  const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  document.getElementById('page-load-message').textContent = `Page loaded in ${pageLoadTime}ms`;
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
  loadCardData();
  showVisitMessage();
  updateFooter();
  
  // Set up image hover effects
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('img').style.transform = 'scale(1.03)';
    });
    card.addEventListener('mouseleave', function() {
      this.querySelector('img').style.transform = 'scale(1)';
    });
  });
});
