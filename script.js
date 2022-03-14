//Librería AnimeJS
anime({
    targets: '.circulo',
    translateX: 500,
    delay: anime.stagger(200, {start: 1000}), 
    background: "#0000FF",
    direction: "reverse"

})

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

let arrayClientes = []


if(localStorage.getItem('usuarios')) {
    arrayClientes = JSON.parse(localStorage.getItem('usuarios'))
} else {
    localStorage.setItem('usuarios', JSON.stringify(arrayClientes))
}


let formulario = document.getElementById("idForm")
let botonMostrarUsuarios = document.getElementById("botonMostrarUsers")
let divUsers = document.getElementById("divUsuarios") 


formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = document.getElementById('idNombre').value; 
    let apellido = document.getElementById('idApellido').value; 
    let email = document.getElementById('idEmail').value;
    let deuda = parseInt(document.getElementById('idDeuda').value); 
    let cft = parseInt(document.getElementById('idCft').value);
    let meses = parseInt(document.getElementById('idMeses').value);
    let resultado = (+deuda + +cft) / meses; 
    document.getElementById("resultadoTexto").value = resultado;

if (  (document.getElementById('idApellido').value == "" || NaN) || (document.getElementById('idDeuda').value == "" || NaN) || (document.getElementById('idCft').value == "" || NaN) || (document.getElementById('idMeses').value == "" || NaN)) {
    swal("Por favor, complete todos los campos.");
    formulario.reset()
    return true
}


    if( (arrayClientes.some(usuarioEnArray => usuarioEnArray.nombre === nombre)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.apellido === apellido)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.email === email)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.deuda === deuda)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.cft === cft)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.meses === meses)) && (arrayClientes.some(usuarioEnArray => usuarioEnArray.resultado === resultado))  ) {
        swal("Los datos ingresados ya figuran en nuestra base de datos");
    } else {        
        const cliente = new Cliente(nombre, apellido, email, deuda, cft, meses, resultado)
        arrayClientes.push(cliente)
        localStorage.setItem('usuarios', JSON.stringify(arrayClientes))
        formulario.reset()
    }

}) 


botonMostrarUsuarios.addEventListener('click', () => {
    arrayClientes.forEach((usuarioEnArray, indice)  => {
        divUsers.innerHTML += `
            <div class="card" id="user${indice}" style="width: 18rem;">
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

const nuevoUsuario = document.getElementById('newUs')
nuevoUsuario.onclick = function newUs(){
const personaNueva = {
    nombre: "Pedro",
    apellido: "Paramo",
    estadoDeuda: 'actividad', 
    dirección: {
      ciudad: 'La Plata',
      provincia: 'Buenos Aires '
    }
  }
  
  function nuevaPersona({ nombre, apellido, estadoDeuda = 'inactividad'}) {
    console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}. Mi deuda está en estado de ${estadoDeuda}.`)
}
  
  newUs(personaNueva)
 };



const btnMostrarJson = document.getElementById('mjson')
btnMostrarJson.onclick = function mosJson(){

    let respuestaDiferida = (delay = 2000) => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, delay);
        });
    };
    
    respuestaDiferida(5000).then(() => {
        console.log("Usted ha obtenido lo que está en el JSON local.");
    });
    fetch("./data_class.json")
    .then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
    } );
};

