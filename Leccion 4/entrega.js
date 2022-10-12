
let nombre = "Lucas";
let apellido = "Laino";

let estudiante = nombre + " " + apellido;

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let lengthEstudiante = estudiante.length;

let primeraLetraNombre = nombre[0];
let ultimaLetraApellido = apellido[apellido.length - 1];

let sinEspaciosEstudiante = estudiante.replace(/ /g, "");

let NombreisinEstudiante = estudiante.includes(nombre);