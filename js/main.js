"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        if (body.classList.contains('clear-mode')) {
            body.classList.replace('clear-mode', 'dark-mode');
            toggleButton.textContent = 'Modo claro';
        } else {
            body.classList.replace('dark-mode', 'clear-mode');
            toggleButton.textContent = 'Modo oscuro';
        }
    });
});
