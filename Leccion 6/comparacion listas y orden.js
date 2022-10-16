
// sort()

const array = [1, 27, 2, 40, 15, 39, 2]

array.sort((a, b) => {
    if (a < b)
    {
        return -1;
    }
    else if (a > b)
    {
        return +1;
    }
    else
    {
        return 0;
    }
});

console.log(array);

// Comparar listas .every()

const array2 = [1, 7, 50, -10, 40, -30];

const resultado = array.every(valor => {
    if (typeof valor === "number")
    {
        return true;
    }
    else{
        return false;
    }
})

console.log(resultado);


// Comparar listas
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2);

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length)
    {
        return false;
    }

    const res = array_1.every((valor, i) =>{
        if (valor === array_2[i]){
            return true;
        }
        else{
            return false;
        }
    })

    return res;
}

console.log(compararArrays(ar1, ar2))