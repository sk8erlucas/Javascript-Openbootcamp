
// Funciones Asincronas

function miAsinc() {

    console.log("Accediendo a la base de datos...");

    let exito = true;

    if (exito == true)
    {
        console.log("Datos obtenidos");
        return true;
    } else console.log("Error");
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(math.random() * 2)

    if (i !== 0) {
        resolve();
    } else {
        reject();
    }

})

// Main programk
miPromesa
    .then(() => console.log("Se ha logueado en forma correcta"))
    .catch(() => console.log("Ha ocurrido un error"))