function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Funkcja do pobierania wartości pliku cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Funkcja do przełączania trybów
function toggleMode(mode) {
    document.body.className = mode;
    setCookie('theme', mode, 7); // Przechowuj preferencje przez 7 dni
}

// Ustawienie trybu na podstawie pliku cookie
document.addEventListener('DOMContentLoaded', function () {
    const theme = getCookie('theme') || 'light-mode';
    document.body.className = theme;

    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', function() {
        const currentMode = document.body.className;
        if (currentMode === 'light-mode') {
            toggleMode('dark-mode');
        } else if (currentMode === 'dark-mode') {
            toggleMode('special-mode');
        } else {
            toggleMode('light-mode');
        }
    });
});