// JavaScript for portfolio website functionality

// Handle active class for the navigation bar
const navLinks = document.querySelectorAll('.navlist li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add event listener for buttons (Hire Me and View Project)
const hireMeBtn = document.querySelector('.btn-container button:first-child');
const viewProjectBtn = document.querySelector('.btn-container button:last-child');

// Example action for 'Hire Me' button
hireMeBtn.addEventListener('click', () => {
    alert('Thank you for your interest! You will be redirected to the contact page soon.');
    // You can add your redirection logic here
    // window.location.href = 'contact.html';
});

// Example action for 'View Project' button
viewProjectBtn.addEventListener('click', () => {
    alert('You will be redirected to the projects page.');
    // You can add your redirection logic here
    // window.location.href = 'projects.html';
});

// Optional: Add hover effect to social media icons (you can also do this via CSS)
const socialIcons = document.querySelectorAll('.icons i');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.color = '#3498db'; // Example color change on hover
    });

    icon.addEventListener('mouseout', function() {
        this.style.color = ''; // Reset color on mouse out
    });
});
