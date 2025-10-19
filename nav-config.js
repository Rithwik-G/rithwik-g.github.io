// Navigation configuration
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  const navLinks = [
    { href: 'index.html', text: 'Home' },
    { href: "https://blog.rithwikg.com/", text: "Blog" },
    { href: 'projects.html', text: 'Projects' },
    { href: 'research.html', text: 'Research' },
    { href: 'competitive.html', text: 'Competitive' },
    { href: 'problems.html', text: 'Problems' },
    { href: 'ideas.html', text: 'Thoughts' }
  ];

  const nav = document.getElementById('main-nav');
  
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
});