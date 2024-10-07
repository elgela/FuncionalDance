"use strict";

function mostrarNumero() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let num3 = Math.floor(Math.random() * 10) + 1;
    const suma = num1 + num2 + num3;

    document.querySelector("#captcha").innerHTML = num1 + " + " + num2 + " + " + num3 + " = " + "?";

    return suma;
}

function verificar(resultado) {
    let respuesta = parseInt(document.querySelector("#respuesta").value);

    if (resultado === respuesta) {
        document.querySelector("#resultado").innerHTML = "Correcto, eres humano.";
    }
    else {
        document.querySelector("#resultado").innerHTML = "Respuesta incorrecta.";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let resultado = mostrarNumero();
    document.querySelector("#btn-captcha").addEventListener("click", function () {
        verificar(resultado);
        resultado = mostrarNumero();
    });
});


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
