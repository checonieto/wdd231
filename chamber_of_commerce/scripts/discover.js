// Load JSON data
fetch('data/items.json')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.querySelector('.card-container');
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      cardContainer.appendChild(card);
    });
  });

// Last visit message
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = Date.now();

if (!lastVisit) {
  document.getElementById('visit-message').textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

  if (daysSinceLastVisit < 1) {
    document.getElementById('visit-message').textContent = "Back so soon! Awesome!";
  } else {
    document.getElementById('visit-message').textContent = `You last visited ${daysSinceLastVisit} day${daysSinceLastVisit === 1 ? '' : 's'} ago.`;
  }
}

localStorage.setItem('lastVisit', currentDate);