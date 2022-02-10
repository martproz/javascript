/*Buenas tardes, Franco. Te paso el código para la próxima entrega, para saber dónde está el problema
¿Qué quiero hacer?
1) Que, a través de un prompt, el usuario me dé tres datos: nombre, apellido, edad.
2) Esa información la quiero almacenar en una variable.
3) Quiero crear un nuevo objeto con esos tres datos.
4) Después, con push, agregar los datos de una nueva persona y que los guarde en una base de datos. 
5) Un primer problema es que nuevoSujeto, según entiendo, está dentro de la función a nivel local.
*/   


let nombreCapturar = prompt("Ingrese un nombre");
let apellidoCapturar = prompt("Ingrese un apellido");
let edadCapturar = prompt("Ingrese una edad");

function capturar() {
    function Persona(nombre,edad,apellido) {
      this.nombre = nombre;
      this.edad = edad;
      this.apellido = apellido;
    }

  nuevoSujeto = new Persona(nombreCapturar,apellidoCapturar,edadCapturar);
    agregar(); 
}

  let baseDatos = [];
  function agregar() {
    baseDatos.push(nuevoSujeto);
  };
console.log(agregar());
