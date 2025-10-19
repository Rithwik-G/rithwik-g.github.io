function toggleHint(btn) {
  const hint = btn.nextElementSibling;
  hint.classList.toggle('visible');
  btn.textContent = hint.classList.contains('visible') ? 'Hide Hint' : 'Show Hint';
}