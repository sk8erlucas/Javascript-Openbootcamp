class Persona {
    #nombre;
    #edad;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setEdad(edad) {
        this.#edad = edad;
    }

    getNombre() {
        return this.#nombre;
    }

    getNacimiento() {
        return 2022 - this.#edad;
    }
}

const Yo = new Persona();
Yo.setEdad(36);
Yo.setNombre("Lucas");

console.log(Yo.getNacimiento())