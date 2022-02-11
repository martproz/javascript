class Cliente {
    constructor(nombre,apellido,edad) { 
        this.nombre =  nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Cliente(prompt("Ingrese un nombre"), 
                       prompt("Ingrese el apellido"), 
                       parseInt(prompt("Ingrese la edad")))

const persona2 = new Cliente(prompt("Ingrese un nombre"), 
                       prompt("Ingrese el apellido"), 
                       parseInt(prompt("Ingrese la edad")))
                       
const persona3 = new Cliente(prompt("Ingrese un nombre"), 
                       prompt("Ingrese el apellido"), 
                       parseInt(prompt("Ingrese la edad"))) 

let arrayPersonas = [persona1, persona2, persona3]

const persona4 = new Cliente("Javier", "Diaz", 21)

let total = arrayPersonas.push(persona4);

console.log(arrayPersonas);
