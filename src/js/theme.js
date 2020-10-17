const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const chengeThemeEl = document.querySelector('#theme-switch-toggle')

chengeThemeEl.addEventListener('change', onToggleTheme)

savingThemeСhecked();

function onToggleTheme() {
    if (chengeThemeEl.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {        
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function savingThemeСhecked() {
    const savingTheme = localStorage.getItem('theme');
    if (savingTheme === Theme.DARK) {
        document.body.classList.add(Theme.DARK);
        chengeThemeEl.checked = true;
    }
}