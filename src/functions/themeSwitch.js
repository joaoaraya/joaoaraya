const _html = document.querySelector('html');
const addTheme = document.querySelector('.themeSwitch');

// Set theme on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) _html.classList.add(savedTheme);

// Change theme and save on local storage
addTheme.addEventListener('click', () => {
    const newTheme = _html.classList.toggle('darkTheme') ? 'darkTheme' : '';
    localStorage.setItem('theme', newTheme);
});