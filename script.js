document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Header background blur logic on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-darker/90', 'backdrop-blur-md', 'border-b', 'border-subtle');
            header.classList.remove('bg-transparent', 'border-transparent');
        } else {
            // Keeping it consistent as requested, but can be adjusted for transparent top
        }
    });
});
