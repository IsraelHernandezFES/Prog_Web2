// Genera número aleatorio entre 1 y 10 al cargar
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentosRestantes = 3;

function verificarAdivinanza() {
    const input = document.getElementById('numeroUsuario');
    const mensaje = document.getElementById('mensaje');
    const intentosTxt = document.getElementById('intentos');
    const intento = parseInt(input.value);

    if (intentosRestantes > 0) {
        if (intento === numeroSecreto) {
            mensaje.innerText = "¡Felicidades! Adivinaste el número.";
            mensaje.style.color = "green";
            desactivarJuego();
        } else {
            intentosRestantes--;
            intentosTxt.innerText = intentosRestantes;
            
            if (intentosRestantes === 0) {
                mensaje.innerText = `Perdiste. El número era ${numeroSecreto}.`;
                mensaje.style.color = "red";
                desactivarJuego();
            } else {
                mensaje.innerText = intento > numeroSecreto ? "Muy alto" : "Muy bajo";
            }
        }
    }
    input.value = "";
}

function desactivarJuego() {
    document.getElementById('numeroUsuario').disabled = true;
    document.querySelector('button').disabled = true;
}