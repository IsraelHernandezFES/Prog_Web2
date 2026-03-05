/**
 * Hernandez Pacheco Jesus Israel
 * Demostración de interacción con estructuras de control
 */

function procesarEntrada() {
    const input = document.getElementById("userInput").value.toLowerCase().trim();
    const log = document.getElementById("log");
    let respuesta = "";

    // 1. Estructura Condicional (If/Else) para verificar si está vacío
    if (input === "") {
        log.innerHTML = "<span style='color:red;'>Por favor, escribe algo.</span>";
        return;
    }

    // 2. Estructura de Selección (Switch) para comandos específicos
    switch (input) {
        case "hola":
            respuesta = "¡Saludos, desarrollador! JS te da la bienvenida.";
            break;
            
        case "bucle":
            respuesta = "Ejecutando For (1 al 5): ";
            for (let i = 1; i <= 5; i++) {
                respuesta += i + " ";
            }
            break;

        case "error":
            // 3. Manejo de Errores (Try/Catch)
            try {
                respuesta = "Intentando algo imposible...";
                eval("consola.log('Esto fallará')"); // Provocamos error
            } catch (e) {
                respuesta = "Error capturado: " + e.message;
            }
            break;

        default:
            // 4. Lógica para números (If/Else anidado)
            if (!isNaN(input)) {
                let num = Number(input);
                respuesta = num % 2 === 0 ? `El número ${num} es PAR.` : `El número ${num} es IMPAR.`;
            } else {
                respuesta = `Entrada recibida: "${input}". No hay un comando especial para esto.`;
            }
    }

    // Mostrar resultado en el div
    log.textContent = respuesta;
}