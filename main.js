import './style.css';

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');
const intentosElement = document.getElementById('intentos');
const botonReiniciar = document.getElementById('reiniciar');

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);
    intentos++;
    intentosElement.textContent = `Intentos: ${intentos}`;

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'El número ingresado debe estar entre 1 y 100';
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
        botonReiniciar.style.display = 'block';
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto';
    } else {
        mensaje.textContent = 'El número es más bajo';
    }
});

botonReiniciar.addEventListener('click', () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    intentosElement.textContent = 'Intentos: 0';
    mensaje.textContent = '';
    inputNumero.value = '';
    botonReiniciar.style.display = 'none';
});