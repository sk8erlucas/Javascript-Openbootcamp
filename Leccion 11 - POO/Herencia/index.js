
// Inheritance  o Herencia

class Persona {
    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludo() {
        console.log("Hola");
    }
}

class Desarrollador extends Persona {
    sueldo;
    nivel;

    constructor(nombre, edad, sueldo, nivel) {
        super(nombre, edad);

        this.sueldo = sueldo;
        this.nivel = nivel;
    }

    // Polimorfismo u Override
    saludo() {
        console.log("Hola developer");
    }
}

const NuevoDesarrollador = new Desarrollador("Lucas", 15, 1000, 9);

console.log(NuevoDesarrollador.saludo());
console.log(NuevoDesarrollador)

