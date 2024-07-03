// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('#contact form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple form validation example
    let valid = true;

    form.querySelectorAll('input, textarea').forEach(input => {
        if (input.value.trim() === '') {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (valid) {
        // Simulate form submission (replace with actual submission logic)
        alert('Form submitted successfully!');
        form.reset();
    }
});