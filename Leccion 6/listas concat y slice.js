
// Concat de listas
const lista1 = ["Hola", 1, 5, 9];
const lista2 = [40, "Chau"];

let lista = lista1.concat(lista2);
console.log(lista);


//Concat de otra forma
let listaPropagacion = [...lista1, ...lista2];
console.log(listaPropagacion);


// Fragmentos de listas
let listaSliced = lista.slice(4, 6);
console.log(listaSliced)