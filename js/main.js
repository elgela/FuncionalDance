"use strict";

function menu() {
    
}

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

document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector(".nav-list");

function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    container__menu.classList.toggle("nav-list__active");
}