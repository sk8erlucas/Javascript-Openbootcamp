
const persona = {
    nombre: "Lucas",
    edad: 36,
    isDeveloper: true,

    saludo: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

persona.saludo();

const creaPersona = (nombre, edad, isDeveloper) => {

    return {
        nombre: nombre,
        edad: edad,
        isDeveloper: isDeveloper,

        saludo: function() {
            console.log(`Hola, mi nombre es ${this.nombre}`)
        }
    }
}

const nuevaPersona = creaPersona("Juan", 23, true);

nuevaPersona.saludo();

const nuevaPersona2 = creaPersona("Juan2", 230, false);

nuevaPersona2.saludo();