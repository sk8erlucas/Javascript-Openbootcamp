
// Funciones flecha

const arrayPrecios = [1, 3, 50, 60]

const arrayPreciosIVA = arrayPrecios.map((valor) => valor * 1.21)

console.log(arrayPreciosIVA)

// Definir funciones flecha

const dobleDelValor = valor => {
    return valor * 1.21
}

// const dobleDelValor = valor => valor * 2 - Puede ser también

const arrayPreciosIVA2 =  arrayPrecios.map(dobleDelValor)
console.log(arrayPreciosIVA2)