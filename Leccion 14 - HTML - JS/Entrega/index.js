const but1 = document.getElementById("button1")

    function alerta(){
        alert("click en el botón")
    }

    but1.addEventListener("click", alerta)

    $("#button1").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })