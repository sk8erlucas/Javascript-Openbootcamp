
function Fibonacci(num) {
    let arrayFibonacci = [0, 1];

    for (let i = 2; i <= num; i++) {
        const next = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];

        arrayFibonacci = [...arrayFibonacci, next];
    }

    return arrayFibonacci;
}

const resultado = Fibonacci(6);
console.log(resultado)