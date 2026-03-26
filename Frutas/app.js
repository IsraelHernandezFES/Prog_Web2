// Arreglo inicial de frutas
let frutas = ["Manzana", "Plátano", "Naranja", "Uva", "Mango"];

// Arreglo donde se guardarán las frutas elegidas
let elegidas = [];

// Variable para controlar el ciclo
let continuar = true;

while (continuar) {

    // Mostrar lista de frutas
    let lista = "Frutas disponibles:\n";
    for (let i = 0; i < frutas.length; i++) {
        lista += (i + 1) + ". " + frutas[i] + "\n";
    }

    // Preguntar al usuario
    let opcion = prompt("Hernandez Pacheco Jesus Israel\n" + lista + "\nElige una fruta por número:");

    // Convertir a número
    let index = parseInt(opcion) - 1;

    // Validar opción
    if (index >= 0 && index < frutas.length) {
        elegidas.push(frutas[index]);
        alert("Agregaste: " + frutas[index]);
    } else {
        alert("Opción inválida");
    }

    // Preguntar si quiere continuar
    let respuesta = prompt("¿Quieres elegir otra fruta? (si/no)").toLowerCase();

    if (respuesta !== "si") {
        continuar = false;
    }
}

// Mostrar resultado final
alert("Frutas elegidas: " + elegidas.join(", "));