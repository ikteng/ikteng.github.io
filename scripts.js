// Create a function to add fade-in class
function fadeInSection(section) {
    section.classList.add('fade-in');
}

// Create a function to add fade-in class
function fadeInSection(section) {
    section.classList.add('fade-in');
}

// Create a function to remove fade-in class
function fadeOutSection(section) {
    section.classList.remove('fade-in');
}

// Create an intersection observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fadeInSection(entry.target); // Add fade-in class when section enters the viewport
        } else {
            fadeOutSection(entry.target); // Remove fade-in class when section leaves the viewport
        }
    });
}, {
    threshold: 0.3 // Trigger the observer when 50% of the section is visible
});

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    console.log('Sections found:', sections.length); // Check if sections are selected

    sections.forEach(section => {
        console.log('Observing section:', section.id); // Log each section being observed
        observer.observe(section); // Start observing each section
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a data object
    const data = { name, email, message };

    // Send data to a JSON file (or to an API if you set one up)
    fetch('https://api.github.com/gists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token YOUR_GITHUB_TOKEN' // Use a GitHub token for authentication
        },
        body: JSON.stringify({
            files: {
                "contact_messages.json": {
                    content: JSON.stringify(data) // Store the contact form data
                }
            }
        })
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        alert('Your message has been sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });

    // Reset the form after submission
    document.getElementById('contactForm').reset();
});
