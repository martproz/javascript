const valorCuotas = (deuda, CFT, meses) => (deuda + CFT) / meses
let deuda = parseFloat(prompt("Ingrese el monto de la deuda")) 
let CFT = parseFloat(prompt("Ingrese el Costo Financiero Total")) 
let meses = parseFloat(prompt("Ingrese la cantidad de meses"))
let resultado = valorCuotas(deuda, CFT, meses) 
console.log(`El valor de cada cuota es de ${resultado}`)

if (deuda >= 200000) {
    alert("Su deuda es mayor a $200.000");
}

if (CFT >= 300000) {
    alert("Su Costo Financiero Total es mayor a $300.000");
}


class Cliente {
    constructor(nombre,apellido,edad,sueldo) { 
        this.nombre =  nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sueldo = sueldo;
    }
}

const persona1 = new Cliente(prompt("Ingrese un nombre"), 
                            prompt("Ingrese el apellido"), 
                            parseInt(prompt("Ingrese la edad")),
                            parseInt(prompt("Ingrese el sueldo"))
)

const persona2 = new Cliente(prompt("Ingrese un nombre"), 
                            prompt("Ingrese el apellido"), 
                            parseInt(prompt("Ingrese la edad")),
                            parseInt(prompt("Ingrese el sueldo"))
)
                       
const persona3 = new Cliente(prompt("Ingrese un nombre"), 
                            prompt("Ingrese el apellido"), 
                            parseInt(prompt("Ingrese la edad")),    
                            parseInt(prompt("Ingrese el sueldo"))
)

let arrayPersonas = [persona1, persona2, persona3]

const persona4 = new Cliente("Javier", "Diaz", 21, 50000)

let total = arrayPersonas.push(persona4);

let mapeo = arrayPersonas.map(function(salario) {
    return salario.sueldo
})

console.log(arrayPersonas);
