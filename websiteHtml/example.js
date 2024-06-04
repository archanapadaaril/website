document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const contactForm = document.getElementById('contact-form');
    const mobileMenu = document.getElementById('mobile-menu');
    const navUl = document.querySelector('nav ul');

    // Tabbed Menu Functionality
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.style.display = 'none');
            document.getElementById(e.target.textContent.toLowerCase()).style.display = 'flex';
            e.target.classList.add('active');
        });
    });

    // Mobile Menu Toggle
    mobileMenu.addEventListener('click', () => {
        navUl.classList.toggle('showing');
    });

    // Form Validation
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name !== "" && email !== "" && subject !== "" && message !== "") {
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
