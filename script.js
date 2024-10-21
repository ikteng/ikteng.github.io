function fadeInSection(section) {
    section.classList.remove('fade-out'); // Remove fade-out class
    section.classList.add('fade-in'); // Add fade-in class
}

function fadeOutSection(section) {
    section.classList.remove('fade-in'); // Remove fade-in class
    section.classList.add('fade-out'); // Add fade-out class
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Section in view:', entry.target.id);
            fadeInSection(entry.target);
        } else {
            console.log('Section out of view:', entry.target.id);
            fadeOutSection(entry.target);
        }
    });
}, {
    threshold: 0.3 // Adjust the threshold for earlier fade-out
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
