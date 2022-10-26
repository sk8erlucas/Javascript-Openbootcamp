
class Persona {
    nombre;
    edad;
    isDeveloper;

    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}. Tengo ${this.edad} y soy developer (${this.isDeveloper})`);
    }
}

const nueva_persona = new Persona("Lucas", 36, true);
nueva_persona.saludo();

if (nueva_persona.isDeveloper) console.log("Soy developer");
else console.log("No soy developer");

console.log(nueva_persona instanceof Persona)