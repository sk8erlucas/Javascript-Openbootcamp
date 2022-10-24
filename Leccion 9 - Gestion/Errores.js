
const miFuncion = val => {
    if (typeof val === "number") return 2 * val;

    throw new Error("El valor debe ser de tipo numero");
}

let elDoble;

try {
    elDoble = miFuncion("Hola");
} catch(e) {
    elDoble = 0;
    
    console.error(e);
}

console.log(elDoble);