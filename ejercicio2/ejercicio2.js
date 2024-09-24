// Definición del objeto discente
var discente = {
    id: 1,
    nombre: "Juan",
    apellidos: "Pérez García",
    aficiones: ["Leer", "Fútbol", "Música"],
    notas: {
        primera: 8,
        segunda: 9,
        tercera: 7
    },
    
    // Método para calcular la media de las notas
    calcularMedia: function() {
        var suma = this.notas.primera + this.notas.segunda + this.notas.tercera;
        return suma / 3;
    },

    // Método para imprimir las aficiones
    imprimirAficiones: function() {
        console.log("Aficiones de " + this.nombre + ":");
        console.log(this.aficiones.join(', '));
    },

    // Método para imprimir un informe completo
    imprimirInforme: function() {
        console.log("Informe del Discente:");
        console.log("---------------------");
        console.log(`ID: ${this.id}`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellidos: ${this.apellidos}`);
        console.log(`Aficiones: ${this.aficiones.join(', ')}`);
        console.log(`Notas: Primera: ${this.notas.primera}, Segunda: ${this.notas.segunda}, Tercera: ${this.notas.tercera}`);
        console.log(`Media: ${this.calcularMedia().toFixed(2)}`);
        console.log("---------------------");
    }
};

// Ejemplo de uso
discente.imprimirAficiones();
discente.imprimirInforme();