
// Fechas

const fecha_ahora = new Date();

console.log(fecha_ahora);

const cumpleanios = new Date(1986, 6, 29, 12, 51, 27, 37);

console.log(cumpleanios);

// new date con milisegundos
const fecha3 = new Date(0+300*60*60*60+100000000000*10);
console.log(fecha3);

// new date con strings
const fecha4 = new Date("October 13, 1979 12:15:40");
console.log(fecha4);

// Comparar
if (fecha4 < fecha_ahora)
{
    console.log(true);
}

console.log(fecha_ahora.getTime())

// Mostrar fechas

console.log(fecha_ahora.getDate() + "/" + (fecha_ahora.getMonth() + 1))

console.log(fecha_ahora.toLocaleDateString())
console.log(fecha_ahora.toLocaleTimeString())
console.log(fecha_ahora.toLocaleString())