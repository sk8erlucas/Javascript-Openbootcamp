
let number = 50;
let array = [1, "Stinga", 3.1, true, number];

console.log(array);

console.log(array[1]);

//Nuevos valores

array.push(number, "Test");
console.log(array);

array.unshift(false);
console.log(array);

// Eliminar valores
array.pop();
console.log(array);

array.shift();
console.log(array);

//Super metodo
let array2 = [1, 3, 3, 4, 5, 6];
array2.splice(1, 1);

console.log(array2)

array2.splice(1, 0, "hola");
console.log(array2)

array2.splice(1, 1, 2);
console.log(array2)