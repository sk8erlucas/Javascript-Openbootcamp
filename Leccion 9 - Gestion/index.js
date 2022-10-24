


const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});


// Main program
const miFuncion = val => {
    if (typeof val === "number") return 2 * val;

    throw new Error("El valor debe ser de tipo numero");
}

let elDoble;

try {
    elDoble = miFuncion("Hola");
} catch(e) {
    elDoble = 0;
    
    logger.error(e);
}

console.log(elDoble);