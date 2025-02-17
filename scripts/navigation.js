// Main JavaScript file

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModified = document.getElementById("lastModified");
    const courseCards = document.getElementById("course-cards");
    const totalCredits = document.getElementById("total-credits");
    const showAllBtn = document.getElementById("show-all");
    const showWddBtn = document.getElementById("show-wdd");
    const showCseBtn = document.getElementById("show-cse");

    // Update year and last modified
    yearSpan.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modified: ${document.lastModified}`;

    // Course data
    const courses = [
        { title: "Introduction to Programming", code: "CSE101", credits: 3, taken: false },
        { title: "Web Design Principles", code: "WDD231", credits: 4, taken: false },
        { title: "Data Structures", code: "CSE102", credits: 3, taken: false },
        { title: "Advanced CSS", code: "WDD331", credits: 4, taken: false }
    ];

    // Render courses
    function renderCourses(filteredCourses) {
        courseCards.innerHTML = "";
        let total = 0;

        filteredCourses.forEach((course, index) => {
            const courseDiv = document.createElement("div");
            courseDiv.className = "course-card";

            // Course title and info
            courseDiv.innerHTML = `
                <p><strong>${course.code}</strong>: ${course.title} (${course.credits} credits)</p>
                <button data-index="${index}" class="mark-taken">
                    ${course.taken ? "Mark as Not Taken" : "Mark as Taken"}
                </button>
            `;

            // Update total credits only for untaken courses
            if (!course.taken) total += course.credits;

            courseCards.appendChild(courseDiv);
        });

        totalCredits.textContent = total;
    }

    // Filter and show courses
    function filterCourses(filter) {
        if (filter === "all") {
            renderCourses(courses);
        } else {
            const filteredCourses = courses.filter(course =>
                course.code.startsWith(filter.toUpperCase())
            );
            renderCourses(filteredCourses);
        }
    }

    // Event listeners for buttons
    showAllBtn.addEventListener("click", () => filterCourses("all"));
    showWddBtn.addEventListener("click", () => filterCourses("WDD"));
    showCseBtn.addEventListener("click", () => filterCourses("CSE"));

    // Event listener for marking courses as taken
    courseCards.addEventListener("click", (event) => {
        if (event.target.classList.contains("mark-taken")) {
            const index = event.target.getAttribute("data-index");
            courses[index].taken = !courses[index].taken; // Toggle taken status
            filterCourses("all"); // Re-render courses
        }
    });

    // Initial render
    filterCourses("all");
});
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});