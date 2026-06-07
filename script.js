// Download button functionality
const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
        const gameName = this.parentElement.querySelector('h2').textContent;
        alert(`جاري تحميل: ${gameName}\nشكراً لاختيارك!`);
        // في الواقع، يمكنك إضافة رابط التحميل الحقيقي هنا
    });
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Page load animation
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
    });
});

// CSS Animation for fade-in
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