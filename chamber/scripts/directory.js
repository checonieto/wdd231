// Fetch member data from members.json
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    const memberContainer = document.getElementById('member-container');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    // Function to display members in grid view
    function displayGrid(members) {
      memberContainer.innerHTML = '';
      memberContainer.classList.remove('list-view');
      memberContainer.classList.add('grid-view');
      members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p><a href="${member.website}" target="_blank">Website</a></p>
          <p>Membership Level: ${member.membershipLevel}</p>
        `;
        memberContainer.appendChild(memberCard);
      });
    }

    // Function to display members in list view
    function displayList(members) {
      memberContainer.innerHTML = '';
      memberContainer.classList.remove('grid-view');
      memberContainer.classList.add('list-view');
      members.forEach(member => {
        const memberItem = document.createElement('div');
        memberItem.classList.add('member-item');
        memberItem.innerHTML = `
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p><a href="${member.website}" target="_blank">Website</a></p>
          <p>Membership Level: ${member.membershipLevel}</p>
        `;
        memberContainer.appendChild(memberItem);
      });
    }

    // Default to grid view
    displayGrid(data);

    // Event listeners for view toggle buttons
    gridViewButton.addEventListener('click', () => displayGrid(data));
    listViewButton.addEventListener('click', () => displayList(data));
  })
  .catch(error => console.error('Error fetching member data:', error));

// Responsive navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});