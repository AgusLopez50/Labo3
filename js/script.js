script.js

const boton = document.getElementById('miBoton');
const texto = document.getElementById('texto');
const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

boton.addEventListener('mouseenter', () => {
    boton.style.transform = 'scale(1.1)';
    texto.style.fontSize = '18px';
    imagen1.style.opacity = 0;
    imagen2.style.opacity = 1;
});

boton.addEventListener('mouseleave', () => {
    boton.style.transform = 'scale(1)';
    texto.style.fontSize = '16px';
    imagen1.style.opacity = 1;
    imagen2.style.opacity = 0;
});