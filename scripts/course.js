document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: ['Python'],
            completed: true // Mark as completed
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
            technology: ['HTML', 'CSS'],
            completed: true // Mark as completed
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions.',
            technology: ['Python'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: ['C#'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        }
    ];

    const courseCardsContainer = document.getElementById("course-cards");
    const totalCreditsSpan = document.getElementById("total-credits");

    function renderCourses(filter = "all") {
        courseCardsContainer.innerHTML = "";
        let totalCredits = 0;

        const filteredCourses = courses.filter(course => {
            if (filter === "all") return true;
            return course.subject.toLowerCase() === filter.toLowerCase();
        });

        filteredCourses.forEach((course, index) => {
            const card = document.createElement("div");
            card.classList.add("course-card");
            if (course.completed) card.classList.add("completed");

            card.innerHTML = `
                <h3>${course.subject} ${course.number}</h3>
                <p><strong>${course.title}</strong></p>
                <p>${course.description}</p>
                <p>Credits: ${course.credits}</p>
                <p class="technology">Technology: ${course.technology.join(", ")}</p>
                <p>Status: ${course.completed ? "Taken" : "Not Taken"}</p>
            `;

            // Add click event to toggle completion status
            card.addEventListener("click", () => {
                courses[index].completed = !courses[index].completed; // Toggle completion status
                renderCourses(filter); // Re-render courses
            });

            courseCardsContainer.appendChild(card);
            totalCredits += course.completed ? course.credits : 0;
        });

        totalCreditsSpan.textContent = totalCredits;
    }

    document.getElementById("show-all").addEventListener("click", () => renderCourses("all"));
    document.getElementById("show-wdd").addEventListener("click", () => renderCourses("wdd"));
    document.getElementById("show-cse").addEventListener("click", () => renderCourses("cse"));

    renderCourses(); // Initial render
});