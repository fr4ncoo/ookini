function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad
    return total;
}


/* function puedeReservar(cantidad) {
    return cantidad <= 2;
} */


function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}


const botonReservar = document.getElementById("boton-reservar");
const contadorTazas = document.getElementById("contador-tazas")


botonReservar.addEventListener("dblclick", function() {
    const tazasActuales = Number(contadorTazas.textContent)


    if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
        console.log("Reserva confirmada")
} else {
    botonReservar.textContent = "Sin cupos"
    botonReservar.disabled = true;
        alert("No hay mas cupos disponibles")

}}
)



