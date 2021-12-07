const _html = document.querySelector('html');
const _change = document.querySelector('.theme-switch');

// Adicionar a classe "light-theme" na tag HTML
_change.addEventListener('click', () => _html.classList.toggle('light-theme'));