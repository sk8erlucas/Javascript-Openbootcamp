
const persona = {
    nombre: "Lucas",
    edad: 36,
}

function obtenDobleEdad(edad) {
    return 2 * edad;
}

const dobleEdad = obtenDobleEdad(persona.edad);
console.log(dobleEdad);

let arrayNums = [];

for (let i = 0; i < 10; i++) {
    const numero = persona.edad + i;

    arrayNums = [...arrayNums, numero]
}