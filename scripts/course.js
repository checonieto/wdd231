const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 131", name: "Dynamic Web Development", credits: 3, completed: false },
    { code: "CSE 110", name: "Programming Building Blocks", credits: 4, completed: true },
    // Add more courses as needed
];

const courseCardsContainer = document.getElementById('course-cards');
const totalCreditsSpan = document.getElementById('total-credits');

function displayCourses(filter = 'all') {
    const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.code.startsWith(filter));
    courseCardsContainer.innerHTML = filteredCourses.map(course => `
        <div class="course-card ${course.completed ? 'completed' : ''}">
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>Credits: ${course.credits}</p>
        </div>
    `).join('');

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsSpan.textContent = totalCredits;
}

document.getElementById('show-all').addEventListener('click', () => displayCourses('all'));
document.getElementById('show-wdd').addEventListener('click', () => displayCourses('WDD'));
document.getElementById('show-cse').addEventListener('click', () => displayCourses('CSE'));

// Initial display
displayCourses();