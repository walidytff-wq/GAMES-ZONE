// Download button functionality
const playButtons = document.querySelectorAll('.play-btn');

playButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const gameName = this.closest('.game-card').querySelector('h3').textContent;
        alert(`جاري تحميل: ${gameName}\nشكراً لاختيارك!`);
    });
});

// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add animation on load
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
    });
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);