
let misDatos = {
    nombre:"Lucas",
    apellido:"Laino",
    edad:37,
    altura:1.80,
    eresDesarrollador:true,
}

let miEdad = misDatos.edad;
console.log(miEdad);


// 
const datosAmigo1 = {
    nombre:"Agustin",
    apellido:"Grippo",
    edad:35,
    altura:1.80,
    eresDesarrollador:false,
}

const datosAmigo2 = {
    nombre:"Gaston",
    apellido:"Tojo",
    edad:40,
    altura:1.80,
    eresDesarrollador:false,
}

let conjuntoDatos = [misDatos, datosAmigo1, datosAmigo2];

conjuntoDatos.sort((a, b) => b.edad - a.edad)
console.log(conjuntoDatos)