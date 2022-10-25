
// import { suma, nombre } from './modulos/maths.js';

import * as moduloMatematicas from  './modulos/maths.js';

const sum = moduloMatematicas.suma(4, 12);
console.log(sum);

console.log(moduloMatematicas.nombre);

import getAutor from './modulos/literatura.js';
console.log(getAutor())