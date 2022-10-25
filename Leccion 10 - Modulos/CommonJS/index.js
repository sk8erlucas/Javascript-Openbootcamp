
// Forma antigua de exportar e importar modulos
// CommonJS - require

const moduloMatematicas = require("./modulos/maths");

console.log(moduloMatematicas.factorial(5));

const factorial = moduloMatematicas.factorial;

console.log(factorial(5));