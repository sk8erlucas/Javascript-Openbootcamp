
class Persona {
    nombre;

    // Private = # (Acceso solo desde la clase)
    #edad;
    #nacimiento;

    // Protected _ - (Ademas desde la clase descendiente)
    _isDeveloper = true;
    
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.#edad = edad;
        this._isDeveloper = isDeveloper;

        this.#nacimiento = 2022 - this.edad;
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}. Tengo ${this.edad} y soy developer (${this.isDeveloper})`);
    }

    getEdad() {
        return this.#edad;
    }

    getNacimiento() {
        return this.#nacimiento;
    }
}


const Yo = new Persona("Lucas", 36, true);
console.log(Yo.nombre);

console.log(Yo.getEdad());