
// Lista de compras, agregado y desagregado

let listaDeCompras = ["Agua", "Pan", "Galletitas", "Papas Fritas", "Gaseosa"]

listaDeCompras.push("Aceite de Girasol")
console.log(listaDeCompras);

listaDeCompras.pop();
console.log(listaDeCompras);

// Lista de peliculas

let peliculasFavoritas = [
    {titulo: "Pelicula 1", director: "Director 1", fecha: new Date(1995, 11, 17)},
    {titulo: "Pelicula 2", director: "Director 2", fecha: new Date(2020, 11, 17)},
    {titulo: "Pelicula 3", director: "Director 3", fecha: new Date(2022, 11, 17)},
]

console.log(peliculasFavoritas)

// Favoritas (Filter)

let peliculasFavoritas2010 = peliculasFavoritas.filter(year =>{
    if (year.fecha > new Date(2010, 1, 1)){
        return true;
    }
})

console.log(peliculasFavoritas2010)

// Directores y peliculas (Map)

let directoresArray = peliculasFavoritas.map(val =>{
    return val.director;
})

console.log(directoresArray);

let peliculasArray = peliculasFavoritas.map(val =>{
    return val.titulo;
})

console.log(peliculasArray);

// Concat

let directoresyPeliculas = directoresArray.concat(peliculasArray)

console.log(directoresyPeliculas)

directoresyPeliculasFP = [...directoresArray, ...peliculasArray];

console.log(directoresyPeliculasFP)