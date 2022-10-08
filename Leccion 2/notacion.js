
//Listas, arrays o arreglos
let Lista1 = ["Arandelas", 0.50, 1000] ;

Lista1[1] = 1;
Lista1[2] = 900;

console.log(Lista1);



//Objetos
let Auto = {
    puertas: 4,
    ruedas: 4,
    patente: "XXX-123",
    isTaxi: false,

    preciosVenta: [1000, 1001, 1002]
}

console.log(Auto);

console.log(Auto.puertas);
console.log(Auto.preciosVenta[0]);



//Fechas
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date("07/25/1986");
console.log(fecha_milis)

