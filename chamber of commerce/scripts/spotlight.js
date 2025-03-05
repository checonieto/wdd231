// Simulated business spotlight data
const businesses = [
    {
        name: "Bison County Cafe",
        description: "Serving the best coffee and pastries in town.",
        image: "images/local-business.jpg"
    },
    {
        name: "Bison County Hardware",
        description: "Your one-stop shop for all your hardware needs.",
        image: "images/hardware-store.jpg"
    }
];

const spotlightSection = document.querySelector("#business-spotlight");

// Rotate featured business every 5 seconds
let currentIndex = 0;
setInterval(() => {
    const business = businesses[currentIndex % businesses.length];
    spotlightSection.innerHTML = `
        <div class="business">
            <img src="${business.image}" alt="${business.name}" loading="lazy" class="responsive-img spotlight-img">
            <p>Featured Business: <strong>${business.name}</strong></p>
            <p>${business.description}</p>
        </div>
    `;
    currentIndex++;
}, 5000);