/*Ejercicio 1 - Constructor (de objetos)
Crea una función que simule ser un constructor de objetos (recuerda que es una función
que devuelve un objeto) que genere objetos del tipo curso. Las propiedades de este
objeto serán: nombre del curso, año, descripción y alumnado que es un array (vacío de
momento).*/


function curso(nombre, anio, descripcion){
    return{
        nombre: nombre,
        anio: anio,
        descripcion: descripcion,
        alumnos: []

    }
}
//creo un curso utilizando el constructor
var curso1 = curso("D.W.Cliente", 2024, "Desarrollo web en entorno cliente");
var curso2 = curso("D.E.Servidor", 2024, "Desarrollo web entorno servidor", ["Lola", "Estela", "josé Manuel"]);
/* console.log(curso);
console.log(curso1);
console.log(curso2); */



/*
Ejercicio 2 - Mostrando (objetos)
Escribe una función para hacer un informe completo (que muestre toda la información
que contiene) del objeto curso y que lo muestre por consola, ya sabes como:
debidamente formateado.*/

function mostrarInforme(curso){
    console.log(`-- Informe Completo del Curso --`);
    console.log("--------------------------------");
    console.log(`Nombre: ${curso.nombre}.`);
    console.log(`Año ${curso.anio} .`);
    console.log(`Descripción: ${curso.descripcion}.`);
    console.log(`Alumnos: ${curso.alumnos}.`);
    console.log(`--------------------------------`);
}
/* mostrarInforme(curso1);
curso1.alumnos.push("Laura", "Andrés");
mostrarInforme(curso1); */

/*  Ejercicio 3 - Recorriendo (objetos)
Crea un objeto JSON denominado discente que tenga las siguientes propiedades: id,
nombre, apellidos, aficiones (que será un array de string) y notas (que será un objeto JSON
con las propiedades primera, segunda y tercera con las notas de cada evaluación).
Añade los siguientes métodos:
• calcularMedia, que calculará la nota media de las tres evaluaciones,
• imprimirAficiones, que imprimirá pos consola las aficiones del alumnado e
• imprimirInforme, que imprime por consola un informe completo.
Las impresiones deben hacerse debidamente formateadas.*/

let discente = {
    id : 22138155,
    nombre : "Lola",
    apellidos : "Cotes de la calle",
    aficiones : ["Deporte", "Videojuegos", "Jardineria"],
    notas : {
        primeraEva :8.8,
        segundaEva : 5.0,
        terceraEva : 4.8,
    },

};
calcularMedia = function (){
    return this.notas.primeraEva + this.notas.segundaEva + this.notas.terceraEva / 3;
};
console.log(calcularMedia.discente);







/*Ejercicio 4 - Modificando (objetos)
Añade, al objeto curso, un método denominado matricular que recibe un objeto
discente (creado en el ejercicio anterior) y que los añade a la propiedad alumnado del
objeto curso.
NOTA: usa los objetos creados en prácticas anteriores para ahorrar tiempo.*/

/*Ejercicio 5 - Mostrando II (objetos)
Diseña una función que permita imprimir por consola cualquier objeto pasado como
parámetro. Se deberá comprobar el tipo de dato de cada propiedad del objeto y actuar
en consecuencia dependiendo si es un número, cadena, array, objeto o función
(método).*/





