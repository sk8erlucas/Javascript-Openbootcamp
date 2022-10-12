
//Factorial de 10 con for
let totalFor = 1;

for (let i = 1; i<=10; i++)
{
    totalFor = totalFor * i;

}

console.log(totalFor);


//Factorial de 10 con while
let counter = 1;
let totalWhile = 1;

while (counter <= 10)
{  
    totalWhile = totalWhile * counter;
    counter++;
}

console.log(totalWhile);

//Factoria de 10 con while y un if + break
let counter2 = 1;
let totalWhile2 = 1;

while (true)
{  
    totalWhile2 = totalWhile2 * counter2;
    counter2++;

    if (counter2 > 10)
    {
        break;
    }
}

console.log(totalWhile2);
