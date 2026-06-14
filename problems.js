function toggleHints(btn) {
  const list = btn.nextElementSibling;
  list.classList.toggle('visible');
  btn.textContent = list.classList.contains('visible') ? 'Hide hints' : 'Hints';
  btn.setAttribute('aria-expanded', list.classList.contains('visible'));
}

function toggleHint(btn) {
  const hint = btn.nextElementSibling;
  const n = btn.dataset.hint;
  hint.classList.toggle('visible');
  btn.textContent = hint.classList.contains('visible') ? `Hide hint ${n}` : `Hint ${n}`;
  btn.setAttribute('aria-expanded', hint.classList.contains('visible'));
}
