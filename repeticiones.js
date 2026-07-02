
const metodos = ["V60", "Kyoto Drip", "Siphon", "Prensa francesa"];

//Instruccion que recorre la lista y que hace algo con CADA elemento

for (const metodo of metodos) {
    console.log(metodo);
}


const reservasDelDia = [2, 1, 2,1,2]
let totalTazas = 0

for (const cantidad of reservasDelDia) {
    totalTazas = totalTazas + cantidad;
} 

    console.log(totalTazas)
