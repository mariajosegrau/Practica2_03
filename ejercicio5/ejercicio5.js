"use strict";
function imprimirEnevecesNumero(num, veces) {
    console.log(`Se ha impreso el número ${num} multiplicado por 2 e incrementando su valor, ${veces} veces.`);
    for (var i = 0; i < veces; i++) {
        console.log(num);
        num *= 2;
    }

}
console.log(imprimirEnevecesNumero(3, 5));


/*     let aux=1;
    for (i=2;i<=3000;i*=2) {
    console.log("2 elevado a "+aux+" es igual a "+i);
    aux++;
    }
    console.log("Se han escrito las potencias de 2 menores de 3000."); */

"use strict";
// Función que imprime el segundo parámetro tantas veces como indica el primer parámetro,
// multiplicando por 2 en cada iteración
/* function imprimirEneVecesMultiplicando(veces, valor) {
    console.log(`Se ha impreso el número ${valor} multiplicado por 2 e incrementando su valor, ${veces} veces.`);
    const resultados = []; // Array para almacenar los resultados

    // Itero tantas veces como indica el parámetro veces  
    for (let i = 0; i < veces; i++) {
        resultados.push(valor); // Agrego el valor al array
        valor *= 2;  // Multiplica por 2 en cada iteración
    }
    // Imprime los resultados en una sola línea, separados por espacios
    console.log(resultados.join(" "));
}
// Llamada a la función. Debe imprimir 6 12 24 48
imprimirEneVecesMultiplicando(4, 6);
imprimirEneVecesMultiplicando(3, 6); */

/* function imprimirMultiplicados(veces, numero) {
    
    let resultado;
    for (let i = 0; i < veces; i++) {

        resultado *= 2;
        console.log(resultado);
    }
    console.log(`Es el resultado de multiplicar por 2 el número ${numero} ${veces} veces`);
}

// Ejemplo de uso:
imprimirMultiplicados(4, 6); */