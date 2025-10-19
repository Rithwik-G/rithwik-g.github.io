// Add hover effects to quote cards
document.addEventListener('DOMContentLoaded', function() {
  const quotes = document.querySelectorAll('.quote-card');
  
  quotes.forEach(quote => {
    quote.addEventListener('mouseenter', () => {
      quote.style.borderLeftWidth = '5px';
    });
    
    quote.addEventListener('mouseleave', () => {
      quote.style.borderLeftWidth = '3px';
    });
  });
});