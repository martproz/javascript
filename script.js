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
    constructor(nombre, apellido, edad, salario, deuda) { 
        this.nombre =  nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.salario = salario;
        this.deuda = deuda;
    }
};


const persona1 = new Cliente(prompt("Ingrese un nombre"), 
                       prompt("Ingrese el apellido"), 
                       parseInt(prompt("Ingrese la edad")),
                       parseInt(prompt("Ingrese su salario")),
                       parseInt(prompt("Ingrese su deuda"))
);

const persona2 = new Cliente(prompt("Ingrese un nombre"), 
                       prompt("Ingrese el apellido"), 
                       parseInt(prompt("Ingrese la edad")),
                       parseInt(prompt("Ingrese su salario")),
                       parseInt(prompt("Ingrese su deuda"))
);

const persona3 = new Cliente("Javier", "Diaz", 21, 1000, 5000)

let arrayPersonas = [persona1, persona2, persona3]     
    
let filtro = arrayPersonas.map(function(mostrar) { 
      return mostrar.deuda 
});

    console.log(filtro);


    
let filtroDeuda = arrayPersonas.sort(function(a, b) {
    return a.deuda - b.deuda;
});


console.log(filtroDeuda);
