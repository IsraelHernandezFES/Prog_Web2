function generarTabla() {
    const contenedor = document.getElementById('resultado');
    let i = 1; // Contador inicial
    let contenido = "<ul>";

    // Ciclo while para generar la tabla del 7
    while (i <= 10) {
        let producto = 7 * i;
        contenido += `<li>7 x ${i} = ${producto}</li>`;
        i++; // Incremento del contador
    }

    contenido += "</ul>";
    contenedor.innerHTML = contenido;
}