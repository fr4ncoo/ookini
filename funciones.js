function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad
    return total;
}

console.log(calcularPrecio(5 , 2));


function puedeReservar(cantidad) {
    if (cantidad <= 2) {
        return true
    } else {
        return false
    }
}


if (puedeReservar(2)) {
    console.log("Reserva confirmada")
} else{
    console.log("No, maximo 2")
}


function puedeReservar2(cantidad, totalHoy) {
  return cantidad <= 2 && (totalHoy + cantidad) <= 50;
}

if (puedeReservar2(2,48))
{
    console.log("Reserva confirmada")
} else {
    console.log("Se excedio el limite de tazas x dia")
}



console.log(puedeReservar2(1, 47)); // Output: true
console.log(puedeReservar2(2, 47));
console.log(puedeReservar2(2, 49));

