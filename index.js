/**
 * Buscar en un arreglo de palabras la palabra que se repite más veces ingresada 
 * por el usuario, en caso contrario agregar dicha palabra.
 * ! Si intento hacer un iteración con un ciclo for, pero no funciona.
 * todo: solucionado, separando en dos funciones, es decir dividiendo las tareas
 */

const palabraRepetida = (palabras, texto) => { 
    if (palabras.includes(texto))
        return true;
    return false;
}

const agregarPalabra = (palabras, texto) => {
    return palabras.push(texto);
}



const palabras = ["fideos", "arroz", "carne"];
const texto = "carne"; // palabra ingresada por el usuario

if (palabraRepetida(palabras, texto)) {
    console.log("La palabra se repite");
} else {
    console.log("Agregando palabra u frase: " + texto);
    agregarPalabra(palabras, texto);
    console.log(palabras);
}










/**
 * Código no funcional
 * ! Este código no funciona bien, solo el que esta arriba de este, separado por funciones
 */
// const palabras = ['amen', '', 'maria'];
// let palabra = 'aleluya';

// for (let i=0; i<palabras.length; i++) {
//     if (palabra == palabras[i]) {
//         console.log("la palabra " + palabra + ", ya fue ingresada");
//         break;
//     }
    
//     palabras.push(palabra);
// }
// console.log(palabras);