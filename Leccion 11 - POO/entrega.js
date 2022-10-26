
class Estudiante {
    nombre = "Lucas";
    asignaturas = ["Javascript", "HTML", "CSS"];

    obtenDatos() {
        const obj = {
            'nombre': this.nombre,
            'asignaturas': this.asignaturas
        }

        return obj;
    }
}

const nuevoEstudiante = new Estudiante();
const resultados = nuevoEstudiante.obtenDatos();

console.log(resultados.nombre);
console.log(resultados.asignaturas);