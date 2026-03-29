// arreglo
let tareas = [];

// Referencias 
const inputTarea = document.getElementById('inputTarea');
const listaTareasUI = document.getElementById('listaTareas');
const contadorUI = document.getElementById('contador');

function agregarTarea() {
    const nombre = inputTarea.value.trim();
    
    if (nombre === "") {
        alert("El nombre de la tarea no puede estar vacío");
        return;
    }

    // Creamos el objeto tarea
    const nuevaTarea = {
        id: Date.now(), 
        nombre: nombre,
        completada: false
    };

    // Guardamos en el arreglo
    tareas.push(nuevaTarea);
    
    // Limpiamos el input y actualizamos la interfaz
    inputTarea.value = "";
    renderizarTareas();
}

function eliminarTarea(id) {
    // Filtramos el arreglo para quitar la tarea con ese ID
    tareas = tareas.filter(t => t.id !== id);
    renderizarTareas();
}

function renderizarTareas() {
    // 1. Limpiar la lista actual en el HTML
    listaTareasUI.innerHTML = "";

    // 2. Recorrer el arreglo y crear los elementos visuales
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${tarea.nombre}</span>
            <button class="btn-delete" onclick="eliminarTarea(${tarea.id})">Completar</button>
        `;
        
        listaTareasUI.appendChild(li);
    });

    // 3. Actualizar contador
    contadorUI.textContent = tareas.length;
    
    // Opcional: Mostrar en consola para que veas el estado del arreglo
    console.log("Arreglo actual:", tareas);
}

// Permitir agregar tarea presionando 'Enter'
inputTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') agregarTarea();
});