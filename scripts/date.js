// Dynamically Display Copyright Year and Last Modified Date
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    const lastModifiedParagraph = document.getElementById("lastModified");

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
});