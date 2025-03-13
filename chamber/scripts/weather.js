// Simulated weather data
const weatherData = {
    temperature: "72°F",
    condition: "Sunny",
    icon: "☀️"
};

const weatherWidget = document.getElementById("weather-widget");

weatherWidget.innerHTML = `
    <p>${weatherData.icon} ${weatherData.temperature}, ${weatherData.condition}</p>
`;