//Librería AnimeJS, animación tres círculos superiores
anime({
    targets: '.circulo',
    translateX: 500,
    delay: anime.stagger(200, {start: 1000}), 
    background: "#0000FF",
    direction: "reverse"

})


//El método constructor es un metodo especial para crear e inicializar un objeto creado 
//a partir de una clase.
class Cliente {
    constructor(nombre, apellido, email, deuda, cft, meses, resultado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.deuda = deuda;
        this.cft = cft;
        this.meses = meses;
        this.resultado = resultado;
    }
}

//array vacío
let arrayClientes = []

//El texto que se convertirá a JSON. 
if(localStorage.getItem('usuarios')) {
    arrayClientes = JSON.parse(localStorage.getItem('usuarios'))
} else {
//El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    localStorage.setItem('usuarios', JSON.stringify(arrayClientes))
}

//analiza los datos que están en el form del html y los almacena en "formulario"
let formulario = document.getElementById("idForm")

//se conecta con el botón mostrar usuarios del html, que es el que crea las tarjetas, [alfa]
let botonMostrarUsuarios = document.getElementById("botonMostrarUsers")

//mostrará la información en el html una vez que se tengan los datos de los usuarios para las tarjetas
let divUsers = document.getElementById("divUsuarios") 


//toma los datos en "formulario", que vienen del html y, con el addEventListener(), registra un evento a un objeto en específico. 
formulario.addEventListener('submit', (e) => {
//el prevent default evita que los datos se pierdan
    e.preventDefault()

//tomo los valores de los input y los almaceno en variables n, a, e, d...
    let nombre = document.getElementById('idNombre').value; 
    let apellido = document.getElementById('idApellido').value; 
    let email = document.getElementById('idEmail').value;
    let deuda = parseInt(document.getElementById('idDeuda').value); 
    let cft = parseInt(document.getElementById('idCft').value);
    let meses = parseInt(document.getElementById('idMeses').value);
    let resultado = (+deuda + +cft) / meses;
    document.getElementById("resultadoTexto").value = resultado;

//condicional para que no se pueda dejar ningún campo vacío
if (  (document.getElementById('idApellido').value == "" || NaN) || (document.getElementById('idDeuda').value == "" || NaN) || (document.getElementById('idCft').value == "" || NaN) || (document.getElementById('idMeses').value == "" || NaN)) {
    swal("Por favor, complete todos los campos.");
    formulario.reset()
} else {
    const cliente = new Cliente(nombre, apellido, email, deuda, cft, meses, resultado)
    arrayClientes.push(cliente)
    localStorage.setItem('usuarios', JSON.stringify(arrayClientes))
    console.log(resultado) //muestra el resultado en pantalla
    return true
}

//condicional para no se pueda volver a ingresar exactamente el mismo usuario
    if( (arrayClientes.some(usuarioEnArray => usuarioEnArray.nombre === nombre)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.apellido === apellido)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.email === email)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.deuda === deuda)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.cft === cft)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.meses === meses)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.resultado === resultado))  ) {
        swal("Los datos ingresados ya figuran en nuestra base de datos");
    } else {        
        const cliente = new Cliente(nombre, apellido, email, deuda, cft, meses, resultado)
        arrayClientes.push(cliente)
        localStorage.setItem('usuarios', JSON.stringify(arrayClientes))
        formulario.reset()
        return true
    }

}) 

//se conecta con la parte [alfa] del código y con el html, mostrar usuarios
botonMostrarUsuarios.addEventListener('click', () => {
    arrayClientes.forEach((usuarioEnArray, indice)  => {
        divUsers.innerHTML += `
        
            <div class="card text-dark bg-warning mb-3 ms-3" id="user${indice}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title col">Nombre: ${usuarioEnArray.nombre}</h5>
                    <p class="card-text col">Apellido: ${usuarioEnArray.apellido}</p>
                    <p class="card-text col">Email: ${usuarioEnArray.email}</p>
                    <p class="card-text col">Deuda: ${usuarioEnArray.deuda}</p>
                    <p class="card-text col">CFT: ${usuarioEnArray.cft}</p>
                    <p class="card-text col">Meses: ${usuarioEnArray.meses}</p>
                    <p class="card-text col">Cuota mensual: ${usuarioEnArray.resultado}</p>
                    <button id="boton${indice}" class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        `
    })
})

// const nuevoUsuario = document.getElementById('newUs')
// nuevoUsuario.onclick = function newUs(){
// const personaNueva = {
//     nombre: "Pedro",
//     apellido: "Paramo",
//     estadoDeuda: 'actividad', 
//     dirección: {
//       ciudad: 'La Plata',
//       provincia: 'Buenos Aires '
//     }
//   }
  
//   function nuevaPersona({ nombre, apellido, estadoDeuda = 'inactividad'}) {
//     console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}. Mi deuda está en estado de ${estadoDeuda}.`)
// }
  
//   newUs(personaNueva)
//  };



// const btnMostrarJson = document.getElementById('mjson')
// btnMostrarJson.onclick = function mosJson(){

//     let respuestaDiferida = (delay = 2000) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(resolve, delay);
//         });
//     };
    
//     respuestaDiferida(5000).then(() => {
//         console.log("Usted ha obtenido lo que está en el JSON local.");
//     });
//     fetch("./data_class.json")
//     .then(res => {
//         return res.json();
//     }).then(data => {
//         console.log(data);
//     } );
// };

