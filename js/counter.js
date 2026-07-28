/**
 * ALCAAMFAP Elétrica - Contadores Animados
 */

(function() {
    'use strict';

    const counters = document.querySelectorAll('.counter');
    const speed = 2000; // duração em ms

    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const suffix = counter.getAttribute('data-suffix') || '';
        const prefix = counter.getAttribute('data-prefix') || '';
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / speed, 1);
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(ease * target);
            counter.textContent = prefix + current.toLocaleString('pt-BR') + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = prefix + target.toLocaleString('pt-BR') + suffix;
            }
        }

        requestAnimationFrame(update);
    }

    if (counters.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }
})();
