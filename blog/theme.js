// Same theme behaviour as the main page: follow the system, toggle with the button.
(function () {
  var root = document.documentElement;
  var icon = document.getElementById('themeIcon');
  function apply(t) {
    root.setAttribute('data-theme', t);
    if (icon) icon.className = t === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
  var current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  apply(current);
  var btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', function () {
    current = current === 'dark' ? 'light' : 'dark';
    apply(current);
  });
})();
