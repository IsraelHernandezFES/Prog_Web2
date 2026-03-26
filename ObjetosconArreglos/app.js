//importamos la clase alumno como tal es un objeto
import { alumno } from "./alumno.js";

let listaAlumnos = [];

function ejecutarApp(){

    let sistemaActivo = true;

    while (sistemaActivo) {
        let menu = prompt(
            "Hernandez Pacheco Jesus Israel\n" +
            "SISTEMA ESCOLAR\n" +
            "1. Registrar Alumno\n" +
            "2. Eliminar Alumno (por ID)\n" +
            "3. Ver Alumnos en Consola\n" +
            "4. Salir"
        );

        switch (menu) {
            case "1":

                let nuevoAlumno = JSON.parse(JSON.stringify(alumno)); // Clonamos el objeto alumno

                //llenamos los datos mediante prompts
                nuevoAlumno.id = parseInt(prompt("ID del alumno:"));
                nuevoAlumno.nombre = prompt("Nombre del alumno:");
                nuevoAlumno.primerApellido = prompt("Primer apellido del alumno:");
                nuevoAlumno.segundoApellido = prompt("Segundo apellido del alumno:");
                nuevoAlumno.edad = parseInt(prompt("Edad del alumno:"));

                //accedemos a los obj anidados
                nuevoAlumno.domicilio.calle.nombre = prompt("Nombre de la calle:");
                nuevoAlumno.domicilio.alcaldia = prompt("Alcaldía del alumno:");

                listaAlumnos.push(nuevoAlumno);
                alert("Alumno registrado exitosamente.");

                break;


            case "2":
                
            let idABuscar = parseInt(prompt("Introduce el ID del alumno a eliminar:"));

            // Buscamos la posición del alumno con ese ID
            let indice = listaAlumnos.findIndex(a => a.id === idABuscar);

            if (indice !== -1) {
                let borrado = listaAlumnos.splice(indice, 1);
                alert("Alumno " + borrado[0].nombre + " eliminado.");
            } else {
                alert("No se encontró el ID.");
            }
                break;


            case "3":
                console.log("Enviando datos a la consola...");
                 // El tiempo 0 permite que se ejecute justo después de que el hilo actual se "relaje"
                setTimeout(() => {
                    console.table(listaAlumnos);
                }, 0);
                alert("Datos enviados. Abre la consola (F12) para verlos.");
                break;
            case "4":

                sistemaActivo = false;
                break;
            default:
                alert("Opción no válida");
        }
    }
}

ejecutarApp();