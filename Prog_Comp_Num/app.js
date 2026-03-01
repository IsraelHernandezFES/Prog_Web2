function compararNumeros() {
    // Obtener valores de los inputs y convertir a número
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const resultado = document.getElementById('resultado');

    // Validación básica de ingeniería
    if (isNaN(n1) || isNaN(n2)) {
        resultado.innerText = "Por favor, ingresa números válidos.";
        return;
    }

    // Lógica de comparación
    if (n1 > n2) {
        resultado.innerText = `${n1} es mayor que ${n2}`;
    } else if (n1 < n2) {
        resultado.innerText = `${n2} es mayor que ${n1}`;
    } else {
        resultado.innerText = "Ambos números son iguales.";
    }
}