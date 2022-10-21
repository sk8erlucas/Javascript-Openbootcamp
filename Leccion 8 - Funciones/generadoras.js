
function* generarID() {
    let id = 0;

    while(true) {
        id++;
        yield id;

        if (id > 10) return id;
    }
}

const gen = generarID()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next().value)
console.log(gen.next().done)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
