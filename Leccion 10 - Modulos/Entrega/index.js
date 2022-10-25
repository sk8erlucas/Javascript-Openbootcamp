
import { suma, multiplica } from "./controller.js";
import chalk from 'chalk';

const res_suma = suma(1, 2);
const res_multiplicacion = multiplica(4, 5);

console.log(chalk.blue(res_suma));
console.log(chalk.green(res_multiplicacion));