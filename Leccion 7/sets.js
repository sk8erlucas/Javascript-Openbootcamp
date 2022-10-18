
// Sets o conjuntos

const array = [1, 2, 3, 4, 5, 6, 1, 3, 4, 5, 7, "Prueba", "Prueba"];

const miSet = new Set(array);

console.log(array);
console.log(miSet);

miSet.add(9);
miSet.add(4);
console.log(miSet);

miSet.delete("Prueba");
console.log(miSet);

//miSet.clear();
//console.log(miSet);

console.log(miSet.has(4));
console.log(miSet.size);

miSet.forEach(valor => {
    console.log(valor);
});

const ar_miSet = [...miSet];
console.log(ar_miSet)