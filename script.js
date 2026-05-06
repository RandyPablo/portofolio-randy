document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 2. Intersection Observer for premium scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger deliberately when 100px into viewport
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-scroll');
    animatedElements.forEach(el => observer.observe(el));
});
