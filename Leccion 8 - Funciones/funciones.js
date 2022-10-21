
// Funcion sencilla

function saludar(tuNombre, parametro_2) {
    console.log("Hola " + tuNombre);
}

saludar("Lucas")

// Objetos

let persona = {nombre: "Lucas", apellido: "Laino"}

function saludarPersona(objeto) {
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludarPersona(persona)


// Funciones con parametros opcionales

function imprimeNumero(numero = 0) {
    console.log(numero);
}

imprimeNumero(40)

// Parametros factor propagacion

function suma(...parametros) {
    return parametros.reduce((a, b) => a + b)
}

console.log(suma(1, 3, 10, 500, 1000000000, 10.47))

// Ambito funcion

function multiplicar(a = 0, b = 0) {
    let variable = "Hola"
    return a * b;
}
 
console.log(multiplicar(100, 40))
// console.log(variable) - Error Undefined