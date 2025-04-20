
// Initialize Lucide icons
lucide.createIcons();

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Show more functionality
const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenCards = document.querySelectorAll('.service-card.hidden');
let isExpanded = false;

showMoreBtn.addEventListener('click', () => {
  hiddenCards.forEach(card => {
    card.classList.toggle('hidden');
  });
  
  isExpanded = !isExpanded;
  showMoreBtn.querySelector('span').textContent = isExpanded ? 'Voir moins' : 'Voir plus';
  showMoreBtn.querySelector('i').setAttribute('data-lucide', isExpanded ? 'chevron-up' : 'chevron-down');
  lucide.createIcons();
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});