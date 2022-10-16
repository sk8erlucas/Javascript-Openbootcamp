
const array = ["CABA", "Lanus", "Villa Luro", "Liniers"]

array.forEach(v => {
    console.log(v);
})

// MAP retorna como si fuera un each y lo guarda como array
const newArray = array.map((valor, indice) => {
    return (indice + 1) + " - " + valor;
});

console.log(newArray)

// Filtrado
const listaObjetos = [
    {nombre: "Lucas", edad: 36},
    {nombre: "Lucas2", edad: 37},
    {nombre: "Lucas3", edad: 386},
    {nombre: "Lucas3", edad: 360},
]

const listaFiltrada = listaObjetos.filter(valor =>{
    if (valor.edad < 100)
    {
        return true;
    }
    else
    {
        return false;
    }
})

console.log(listaFiltrada)


// Reduce

const valores = [3, 56, 23, 5, 90, 100];
const suma = valores.reduce((acum, cur, i, arrayOriginal) =>{
    console.log(acum);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);

    return acum + cur;

})

console.log(suma)
