document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Hero Slider
    const heroSlides = document.querySelectorAll('.hero-slider .slide');
    const heroDots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        heroSlides[index].classList.add('active');
        heroDots[index].classList.add('active');
        currentSlide = index;
    }
    
    heroDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });
    
    // Auto slide change
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(nextSlide);
    }, 5000);
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        testimonialSlides[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentTestimonial = index;
    }
    
    testimonialDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showTestimonial(slideIndex);
        });
    });
    
    // Auto testimonial change
    setInterval(() => {
        let nextTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
        showTestimonial(nextTestimonial);
    }, 7000);
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 26, 26, 0.9)';
            header.style.padding = '15px 0';
        } else {
            header.style.background = 'transparent';
            header.style.padding = '20px 0';
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
});









// START NOS ATOUT

const additionalServices = [
    {
        image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=600&q=80',
        title: 'Métallurgie avancée',
        description: 'Solutions métalliques innovantes pour vos projets industriels.'
    },
    {
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
        title: 'Sécurité intégrée',
        description: 'Systèmes de sécurité nouvelle génération pour votre entreprise.'
    },
    {
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80',
        title: 'Solutions électriques',
        description: 'Installation et maintenance de systèmes électriques performants.'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const servicesGrid = document.getElementById('servicesGrid');
    const showMoreBtn = document.getElementById('showMoreBtn');
    let additionalCardsShown = false;

    showMoreBtn.addEventListener('click', () => {
        if (!additionalCardsShown) {
            additionalServices.forEach(service => {
                const card = document.createElement('article');
                card.className = 'atout__card';
                card.innerHTML = `
                    <img src="${service.image}" alt="${service.title}" class="atout__card-image">
                    <h2 class="atout__card-title">${service.title}</h2>
                    <p class="atout__card-text">${service.description}</p>
                `;
                servicesGrid.appendChild(card);
            });
            
            showMoreBtn.textContent = 'Voir moins';
            additionalCardsShown = true;
        } else {
            const additionalCards = Array.from(servicesGrid.children).slice(-3);
            additionalCards.forEach(card => card.remove());
            
            showMoreBtn.textContent = 'En savoir plus';
            additionalCardsShown = false;
        }
    });
});


// FAQ

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            // Trigger reflow for smooth animation
            answer.style.display = 'block';
            requestAnimationFrame(() => {
                answer.style.display = '';
            });
        });
    });
    
    // Open first item by default
    faqItems[0].classList.add('active');
});