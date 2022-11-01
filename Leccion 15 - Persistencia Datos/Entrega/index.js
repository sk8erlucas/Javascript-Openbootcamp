let nom = "Lucas"
let ap = "Laino"

const NombreApellido = {
    nombre: nom,
    apellido: ap
}

console.log(NombreApellido)

sessionStorage.setItem("persona", JSON.stringify(NombreApellido))
localStorage.setItem("persona", JSON.stringify(NombreApellido))

var minutos2 = new Date( Date.now() + 1000 * 60 * 2 );

console.log(minutos2)

document.cookie = "persona=" + JSON.stringify(NombreApellido) + "; expires=" + minutos2.toUTCString()
