// Agrega el valor a la pantalla
function agregarPantalla(value) {
    document.getElementById("pantalla").value += value;
}

// Limpia el contenido
function limpiarPantalla() {
    document.getElementById("pantalla").value = "";
}

// Evalúa la operación
function calcularResultado() {
    let pantalla = document.getElementById("pantalla");
    if (pantalla.value === "") return;

    try {
        // Uso de eval para procesar la cadena matemática
        let resultado = eval(pantalla.value);
        pantalla.value = resultado;
    } catch (error) {  
        pantalla.value = "ERROR SISTEMA";
    }
}

// Soporte para teclado físico
document.addEventListener("keydown", function(event) {
    let tecla = event.key;
    let pantalla = document.getElementById("pantalla");

    if (!isNaN(tecla)) {
        agregarPantalla(tecla);
    } else if (["+", "-", "*", "/"].includes(tecla)) {
        agregarPantalla(tecla);
    } else if (tecla === "." || tecla === ",") {
        agregarPantalla(".");
    } else if (tecla === "Enter") {
        calcularResultado();
    } else if (tecla === "Backspace") {
        pantalla.value = pantalla.value.slice(0, -1);
    } else if (tecla.toLowerCase() === "c") {
        limpiarPantalla();
    }
});