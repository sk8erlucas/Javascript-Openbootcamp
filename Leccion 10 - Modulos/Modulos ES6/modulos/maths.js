
export function suma (a, b) {
    return a + b;
}

export function multiplica (a, b) {
    return a * b;
}

export function eleva (a, b) {
    return a ** b;
}

export function factorial (a) {
    // 5 * 4 * 3 * 2 * 1

    let factorial = 1;

    for (let i = 1; i <= a; i++)
    {
        factorial *= i;
    }

    return factorial;
}

export const nombre = "Lucas"