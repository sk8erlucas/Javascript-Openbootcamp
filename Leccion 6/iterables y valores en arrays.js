
// .some()

const array = [1, 2, 3, 4, 5, 6, 7];

const res = array.some(valor => {
    if (valor === 4){
        return true;
    }
})

console.log(res);


// Lista a partir de objeto iterable

const stringa = "Hola como te va";

const ar_str = Array.from(stringa);
console.log(ar_str);

