
function returnTrue() {
    return true
}

// Async

const delay = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));

delay(5000)
  .then(() => console.log(`Hola soy una promesa`))


// Generadora

function* generarIDpares() {
    let id = 0;

    while(true) {
        id += 2;
        yield id;
    }
}

const gen = generarIDpares()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
