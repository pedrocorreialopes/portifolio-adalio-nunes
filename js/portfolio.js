/**
 * ALCAAMFAP Elétrica - Portfólio e Filtros
 */

(function() {
    'use strict';

    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const serviceCards = document.querySelectorAll('.service-card[data-category]');

    if (filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');

                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Filtrar itens do portfólio
                if (portfolioItems.length) {
                    portfolioItems.forEach(item => {
                        const categories = (item.getAttribute('data-category') || '').split(' ');
                        const shouldShow = filter === 'all' || categories.includes(filter);

                        if (shouldShow) {
                            item.style.display = 'block';
                            item.classList.add('animate-fade-in');
                            setTimeout(() => item.classList.remove('animate-fade-in'), 600);
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }

                // Filtrar cards de serviços
                if (serviceCards.length) {
                    serviceCards.forEach(card => {
                        const categories = (card.getAttribute('data-category') || '').split(' ');
                        const shouldShow = filter === 'all' || categories.includes(filter);

                        if (shouldShow) {
                            card.style.display = 'block';
                            card.classList.add('animate-fade-in');
                            setTimeout(() => card.classList.remove('animate-fade-in'), 600);
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    }

    // Pesquisa de serviços
    const serviceSearch = document.getElementById('service-search');
    const allServiceCards = document.querySelectorAll('.service-card');

    if (serviceSearch && allServiceCards.length) {
        serviceSearch.addEventListener('input', function() {
            const query = this.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

            allServiceCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                const desc = card.querySelector('p').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Lightbox simplificado para portfólio
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.getAttribute('data-title') || 'Projeto';
            const desc = this.getAttribute('data-desc') || 'Em breve mais detalhes sobre este projeto.';
            alert(title + '\n\n' + desc + '\n\nEm breve esta galeria será expandida com fotos reais dos projetos.');
        });
    });
})();
