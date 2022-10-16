
const array = [1, 2, 3, 4, 5, 6]

// Forma tradicional
for (let i = 0; i < array.length; i++)
{
    console.log(array[i]);
}

// Forma ES6
array.forEach(valor => {
    console.log(valor);
})

// Busqueda de valor en lista
const variable = array.find(valor => {
    if (valor === 3)
    {  
        return true;
    }
})

console.log(variable)


const listaObjetos = [
    {nombre: "Lucas", edad: 36},
    {nombre: "Lucas2", edad: 37},
    {nombre: "Lucas3", edad: 386},
    {nombre: "Lucas3", edad: 360},
]

const EdadLucas = listaObjetos.find(o => {
    if (o.nombre == "Lucas")
    {
        return true;
    }
})

console.log(EdadLucas.edad)