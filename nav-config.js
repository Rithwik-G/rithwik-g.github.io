// Navigation configuration
document.addEventListener('DOMContentLoaded', function() {
  // Get current page, handling GitHub Pages paths
  let currentPage = window.location.pathname.split('/').pop();
  if (!currentPage || currentPage === '') {
    currentPage = 'index.html';
  }
  
  const navLinks = [
    { href: 'index.html', text: 'Home' },
    { href: "https://blog.rithwikg.com/", text: "Blog" },
    { href: 'problems.html', text: 'Cool Problems' },
    { href: 'ideas.html', text: 'Song Lyrics' },
    { href: 'projects.html', text: 'Projects' },
    { href: 'research.html', text: 'Research' },
    { href: 'competitive.html', text: 'Competitive Programming' },
  ];

  const nav = document.getElementById('main-nav');
  
  if (nav) {
    navLinks.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.text;
      
      // Add active class if this is the current page
      if (currentPage === link.href || (currentPage === '' && link.href === 'index.html')) {
        a.classList.add('active');
      }
      
      nav.appendChild(a);
    });
  }
});