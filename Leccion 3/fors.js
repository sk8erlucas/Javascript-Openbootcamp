
let lista = [1, 2, "Prueba", 10.27, 40, 50, "Otra cosa"]

/*for (let i = 0; i < lista.length; i++)
{
    console.log(lista[i]);
}*/

lista.forEach(valor => {
    console.log(valor);
});

//For para objetos

let persona = {
    nombre: "Lucas",
    apellido: "Villar",
    edad: 34
}

for (let propiedad in persona)
{
    console.log(propiedad);
    console.log(persona[propiedad])
}