// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Scroll reveal animation
function scrollReveal() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('aos-animate');
        }
    });
}

// Initialize scroll reveal on load
window.addEventListener('load', scrollReveal);
// Add scroll event listener
window.addEventListener('scroll', scrollReveal);

// Add animation classes to elements
document.querySelectorAll('.hero-content > *').forEach((el, i) => {
    el.classList.add('fade-in', `delay-${i}`);
});

// Add data-aos attributes to sections
document.querySelectorAll('.section').forEach(section => {
    section.setAttribute('data-aos', 'fade-up');
});