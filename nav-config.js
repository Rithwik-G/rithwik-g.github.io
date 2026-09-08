// Navigation configuration
document.addEventListener('DOMContentLoaded', function() {
  // Get current page, handling GitHub Pages paths
  let currentPage = window.location.pathname.split('/').pop();
  if (!currentPage || currentPage === '') {
    currentPage = 'index.html';
  }
  
  const navLinks = [
    { href: 'index.html', text: 'Home' },
    { href: 'problems.html', text: 'Cool Problems' },
    { href: 'ideas.html', text: 'Song Lyrics' },
    { href: 'research.html', text: 'Research' },
    { href: 'projects.html', text: 'Projects' },
    { href: 'tools.html', text: 'Tools' },
    { href: 'side-quests.html', text: 'Side Quests' },
    { href: 'competitive.html', text: 'Competitive Programming' },
    { href: "https://blog.rithwikg.com/", text: "Blog" },
  ];

  const nav = document.getElementById('main-nav');
  const sidebar = document.querySelector('.sidebar');

  if (sidebar && !sidebar.querySelector('.site-name')) {
    const siteName = document.createElement('a');
    siteName.href = 'index.html';
    siteName.className = 'site-name';
    siteName.textContent = 'Rithwik Gupta';
    sidebar.insertBefore(siteName, nav);
  }

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
