
let fecha_hoy = new Date()
console.log(fecha_hoy.toLocaleDateString())

let fecha_nacim = new Date(1986, 06, 29)
console.log(fecha_nacim.toLocaleDateString())

if (fecha_hoy > fecha_nacim) {
    console .log(true);
}

const dia_nacim = fecha_nacim.getDate();
console.log(dia_nacim);
const mes_nacim = fecha_nacim.getMonth() + 1;
console.log(mes_nacim);
const anio_nacim = fecha_nacim.getFullYear();
console.log(anio_nacim);