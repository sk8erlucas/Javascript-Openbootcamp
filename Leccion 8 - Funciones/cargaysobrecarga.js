
// Carga de funciones

function saludar() {
    hola()
}

function hola() {
    console.log("Hola!")
}

saludar()

// Sobrecarga de funciones (Stackoverflow)

function recursiva() {
    console.log("Hola")
    recursiva()
}

recursiva()