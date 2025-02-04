document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Спостерігаємо за всіма секціями
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Анімація для карток проектів
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Паралакс ефект для аватара
    window.addEventListener('mousemove', (e) => {
        const avatar = document.querySelector('.avatar');
        const rect = avatar.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const moveX = x * 0.01;
        const moveY = y * 0.01;
        
        avatar.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});