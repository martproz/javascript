const valorCuotas = (deuda, CFT, meses) => (deuda + CFT) / meses
let deuda = parseFloat(prompt("Ingrese el monto de la deuda")) 
let CFT = parseFloat(prompt("Ingrese el Costo Financiero Total")) 
let meses = parseFloat(prompt("Ingrese la cantidad de meses"))
let resultado = valorCuotas(deuda, CFT, meses) 
console.log(`El valor de cada cuota es de ${resultado}`)

if (deuda >= 200) {
    alert("Su deuda es elevada");
}

if (CFT >= 300) {
    alert("Nuestro banco quebrará por gente como usted.");
}

for(meses = 1; meses === 1; meses--) {
    console.log("Usted ha consultado por " + meses + " mes.");
}

for(meses = 2; meses <= 12; meses++) {
    console.log("Usted ha consultado por " + meses + " meses.");
}



