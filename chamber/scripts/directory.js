// Load JSON data
fetch('data/members.json')
  .then(response => response.json())
  .then(data => {
    const memberContainer = document.querySelector('.member-container');
    data.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.classList.add('member-card');
      memberCard.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Email: ${member.email}</p>
        <p>Membership Level: ${member.membershipLevel}</p>
      `;
      memberContainer.appendChild(memberCard);
    });
  });