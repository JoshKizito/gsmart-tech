// Portfolio data
const portfolioItems = [
    {
      id: 1,
      title: 'Électricité',
      category: 'repair',
      imageUrl: 'https://images.unsplash.com/photo-1709656602966-b71944dbad64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'Métallurgie',
      category: 'gsmartec',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1682144786282-62202bd9f5bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Génie Informatique',
      category: 'gsmartec',
      imageUrl: 'https://images.unsplash.com/photo-1632454005865-1ea2afe2074f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      title: 'Maintenance Réseaux',
      category: 'repair',
      imageUrl: 'https://images.unsplash.com/photo-1528845922818-cc5462be9a63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      title: 'Sécurité & Innovation Technologique',
      category: 'repair',
      imageUrl: 'https://images.unsplash.com/photo-1618482914248-29272d021005?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      title: 'Mécanique Générale',
      category: 'repair',
      imageUrl: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  
  // Create portfolio cards
  function createPortfolioCard(item) {
    return `
      <div class="portfolio-card">
        <div class="card-image">
          <img src="${item.imageUrl}" alt="${item.title}">
        </div>
        <div class="card-content">
          <div class="card-text">
            <div class="category">// GSMARTEC</div>
            <h3 class="title">${item.title}</h3>
          </div>
          <a href="/portfolio/${item.id}" class="card-button"></a>
        </div>
      </div>
    `;
  }
  
  // Render portfolio items
  document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.getElementById('portfolioGrid');
    portfolioGrid.innerHTML = portfolioItems.map(createPortfolioCard).join('');
  });